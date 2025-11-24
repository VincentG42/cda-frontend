import type { APIRoute } from 'astro';

export const ALL: APIRoute = async ({ request, cookies, params }) => {
    const path = params.path;
    const API_URL = import.meta.env.PUBLIC_API_URL;
    const token = cookies.get('auth_token')?.value;

    const url = new URL(request.url);
    const searchParams = url.search;

    const headers: Record<string, string> = {
        'Accept': 'application/json',
    };

    const contentType = request.headers.get('Content-Type');
    if (contentType) {
        headers['Content-Type'] = contentType;
    }

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${API_URL}/api/${path}${searchParams}`, {
            method: request.method,
            headers: headers,
            body: request.body,
            // @ts-ignore - duplex is needed for streaming bodies in some fetch implementations (Node 18+)
            duplex: 'half',
        });

        if (response.status === 403 || response.status === 401) {
            const text = await response.text();
            console.error(`[Proxy] Auth error body:`, text);
            // We need to return this text so we can see it in the frontend console if needed, 
            // or at least we have it in the server logs.
            return new Response(text, {
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Forward response status and headers (optional, be careful with CORS)
        // For simplicity, we just return the body and status
        const data = await response.text(); // Get text first to handle non-JSON or empty responses

        // Try to parse JSON if possible
        let bodyResponse = data;
        try {
            bodyResponse = JSON.parse(data);
            bodyResponse = JSON.stringify(bodyResponse); // Re-stringify to ensure valid JSON response
        } catch (e) {
            // Keep as text if not JSON
        }

        return new Response(bodyResponse, {
            status: response.status,
            headers: {
                'Content-Type': response.headers.get('Content-Type') || 'application/json',
            },
        });

    } catch (error: any) {
        return new Response(JSON.stringify({ message: error.message || 'Proxy Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

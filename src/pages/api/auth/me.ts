import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request, cookies }) => {
    const API_URL = import.meta.env.PUBLIC_API_URL;
    const token = cookies.get('auth_token')?.value;

    if (!token) {
        return new Response(JSON.stringify(null), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        // We assume the backend endpoint for the user profile is /api/me
        // based on the existence of /api/me/dashboard
        const response = await fetch(`${API_URL}/api/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(`Backend /api/me error: ${response.status}`, data);
            return new Response(JSON.stringify({
                message: `Backend rejected token: ${data.message || response.statusText}`,
                backendStatus: response.status
            }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error: any) {
        console.error('Internal /api/auth/me error', error);
        return new Response(JSON.stringify({ message: error.message || 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

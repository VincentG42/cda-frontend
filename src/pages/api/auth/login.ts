import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
    const body = await request.json();
    const API_URL = import.meta.env.PUBLIC_API_URL;

    try {
        const response = await fetch(`${API_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (!response.ok) {
            return new Response(JSON.stringify(data), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const isProd = import.meta.env.PROD;

        // Set HttpOnly cookie
        cookies.set('auth_token', data.token, {
            httpOnly: true,
            secure: isProd, // Ensure this is false in dev
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });

        // Return user data without token
        const { token, ...userData } = data;
        return new Response(JSON.stringify(userData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error: any) {
        return new Response(JSON.stringify({ message: error.message || 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

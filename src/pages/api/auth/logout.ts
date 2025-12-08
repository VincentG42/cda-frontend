import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ cookies }) => {
    const isProd = import.meta.env.PROD;
    cookies.delete('auth_token', {
        path: '/',
        secure: isProd,
        httpOnly: true,
        sameSite: 'lax',
    });

    return new Response(JSON.stringify({ message: 'Logged out' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
};

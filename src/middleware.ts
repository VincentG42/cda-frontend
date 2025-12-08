import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
    const { pathname } = context.url;
    console.log(`Middleware executing for: ${pathname}`);

    // Check if the route is a protected route (starting with /manage or /dashboard)
    if (pathname.startsWith("/manage") || pathname.startsWith("/dashboard")) {
        // Check for the auth_token cookie
        const token = context.cookies.get("auth_token");

        // If no token exists, redirect to the oops page or login page
        // The user specifically requested redirection to /oops
        if (!token || !token.value) {
            return context.redirect("/oops", 302);
        }
    }

    return next();
});

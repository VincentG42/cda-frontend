export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  const body = await request.json();
  const API_URL = "https://backend-basketclub-app.ddev.site";
  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    if (!response.ok) {
      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }
    const isProd = true;
    cookies.set("auth_token", data.token, {
      httpOnly: true,
      secure: isProd,
      // Ensure this is false in dev
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
      // 1 week
    });
    const { token, ...userData } = data;
    return new Response(JSON.stringify(userData), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message || "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

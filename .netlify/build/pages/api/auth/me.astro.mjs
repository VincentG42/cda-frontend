export { renderers } from '../../../renderers.mjs';

const GET = async ({ request, cookies }) => {
  const API_URL = "https://backend-basketclub-app.ddev.site";
  const token = cookies.get("auth_token")?.value;
  if (!token) {
    return new Response(JSON.stringify(null), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const response = await fetch(`${API_URL}/api/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (!response.ok) {
      console.error(`Backend /api/me error: ${response.status}`, data);
      return new Response(JSON.stringify({
        message: `Backend rejected token: ${data.message || response.statusText}`,
        backendStatus: response.status
      }), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Internal /api/auth/me error", error);
    return new Response(JSON.stringify({ message: error.message || "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

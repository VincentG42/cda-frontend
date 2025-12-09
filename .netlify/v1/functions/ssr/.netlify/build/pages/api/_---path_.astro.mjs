export { renderers } from '../../renderers.mjs';

const ALL = async ({ request, cookies, params }) => {
  const path = params.path;
  const API_URL = "https://backend-basketclub-app.ddev.site";
  const token = cookies.get("auth_token")?.value;
  const url = new URL(request.url);
  const searchParams = url.search;
  const headers = {
    "Accept": "application/json"
  };
  const contentType = request.headers.get("Content-Type");
  if (contentType) {
    headers["Content-Type"] = contentType;
  }
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  try {
    const response = await fetch(`${API_URL}/api/${path}${searchParams}`, {
      method: request.method,
      headers,
      body: request.body,
      // @ts-ignore - duplex is needed for streaming bodies in some fetch implementations (Node 18+)
      duplex: "half"
    });
    if (response.status === 403 || response.status === 401) {
      const text = await response.text();
      console.error(`[Proxy] Auth error body:`, text);
      return new Response(text, {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }
    const data = await response.text();
    let bodyResponse = data;
    try {
      bodyResponse = JSON.parse(data);
      bodyResponse = JSON.stringify(bodyResponse);
    } catch (e) {
    }
    return new Response(bodyResponse, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message || "Proxy Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

export { renderers } from '../../../renderers.mjs';

const POST = async ({ cookies }) => {
  const isProd = true;
  cookies.delete("auth_token", {
    path: "/",
    secure: isProd,
    httpOnly: true,
    sameSite: "lax"
  });
  return new Response(JSON.stringify({ message: "Logged out" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

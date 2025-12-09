import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_vQyNu-NM.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/login.astro.mjs');
const _page2 = () => import('./pages/api/auth/logout.astro.mjs');
const _page3 = () => import('./pages/api/auth/me.astro.mjs');
const _page4 = () => import('./pages/api/_---path_.astro.mjs');
const _page5 = () => import('./pages/change-password.astro.mjs');
const _page6 = () => import('./pages/connexion.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/dashboard.astro.mjs');
const _page9 = () => import('./pages/forgot-password.astro.mjs');
const _page10 = () => import('./pages/manage/players/_id_.astro.mjs');
const _page11 = () => import('./pages/manage/teams/_id_.astro.mjs');
const _page12 = () => import('./pages/manage.astro.mjs');
const _page13 = () => import('./pages/oops.astro.mjs');
const _page14 = () => import('./pages/reset-password.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/login.ts", _page1],
    ["src/pages/api/auth/logout.ts", _page2],
    ["src/pages/api/auth/me.ts", _page3],
    ["src/pages/api/[...path].ts", _page4],
    ["src/pages/change-password.astro", _page5],
    ["src/pages/connexion.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/dashboard/index.astro", _page8],
    ["src/pages/forgot-password.astro", _page9],
    ["src/pages/manage/players/[id].astro", _page10],
    ["src/pages/manage/teams/[id].astro", _page11],
    ["src/pages/manage/index.astro", _page12],
    ["src/pages/oops.astro", _page13],
    ["src/pages/reset-password.astro", _page14],
    ["src/pages/index.astro", _page15]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "a85133a2-f433-4f84-b227-1316a031592e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

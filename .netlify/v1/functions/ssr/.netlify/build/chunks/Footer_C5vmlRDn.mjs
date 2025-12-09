import { c as createComponent, m as maybeRenderHead, d as renderComponent, b as addAttribute, r as renderTemplate } from './astro/server_BAntvzzV.mjs';
import 'kleur/colors';
import 'html-escaper';
import { mergeProps, computed, useSSRContext } from 'vue';
import { _ as _export_sfc, u as useAuthStore } from './_plugin-vue_export-helper_ceIx8-CJ.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
import 'clsx';

const _sfc_main = {
  __name: 'AuthNav',
  setup(__props, { expose: __expose }) {
  __expose();

const authStore = useAuthStore();

const canAccessAdminDashboard = computed(() => {
  if (!authStore.user || !authStore.user.user_type_id) return false;
  // 1: Player, 2: Coach, 3: Staff, 4: President, 5: Admin
  return [2, 3, 4, 5].includes(Number(authStore.user.user_type_id));
});

const canAccessPlayerDashboard = computed(() => {
  // Any logged-in user can access their personal dashboard
  return !!authStore.user;
});

const handleLogout = () => {
  authStore.logout();
  // Redirect to homepage after logout
  window.location.href = '/';
};

const __returned__ = { authStore, canAccessAdminDashboard, canAccessPlayerDashboard, handleLogout, computed, get useAuthStore() { return useAuthStore } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center space-x-8 ml-8" }, _attrs))}>`);
  if ($setup.authStore.user) {
    _push(`<!--[-->`);
    if ($setup.canAccessAdminDashboard) {
      _push(`<a href="/manage" class="nav-link font-medium transition-colors hover:text-[#FF7F11]"> Admin Dashboard </a>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.canAccessPlayerDashboard) {
      _push(`<a href="/dashboard" class_name="nav-link font-medium transition-colors hover:text-[#FF7F11]"> Mon Dashboard </a>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<button class="bg-[#FF7F11] text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors"> Déconnexion </button><!--]-->`);
  } else {
    _push(`<a href="/connexion" class="bg-[#FF7F11] text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors"> Connexion </a>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/layout/AuthNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const AuthNav = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$NavigationBar = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { label: "Accueil", id: "hero" },
    { label: "Événements", id: "events" },
    { label: "Matchs", id: "matches" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-20"> <a href="/" class="flex items-center space-x-3"> <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"> <span class="text-white font-bold text-xs">${"CCSLR"}</span> </div> </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center space-x-8"> ${navItems.map((item) => renderTemplate`<button${addAttribute(item.id, "data-section-id")} class="nav-link font-medium transition-colors hover:text-secondary"> ${item.label} </button>`)} ${renderComponent($$result, "AuthNav", AuthNav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/layout/AuthNav.vue", "client:component-export": "default" })} </div> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="md:hidden p-2"> <span id="menu-icon">Menu</span> <span id="x-icon" class="hidden">X</span> </button> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-200"> <div class="px-4 py-4 space-y-4"> ${navItems.map((item) => renderTemplate`<button${addAttribute(item.id, "data-section-id")} class="nav-link block w-full text-left text-gray-700 font-medium hover:text-secondary transition-colors"> ${item.label} </button>`)} ${renderComponent($$result, "AuthNav", AuthNav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/layout/AuthNav.vue", "client:component-export": "default" })} </div> </div> </div> </nav> `;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/layout/NavigationBar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary text-white py-16 mt-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12"> <div> <h3 class="text-2xl font-bold mb-6">${"CCSLR St Joseph"}</h3> <p class="text-green-100 text-lg leading-relaxed">
Passionnés de basketball, engagés vers l'excellence.
</p> </div> <div> <h4 class="text-xl font-semibold mb-6">Contact</h4> <a href="/contact" class="text-green-100 hover:text-secondary transition-colors text-lg">Contactez-nous</a> </div> <div> <h4 class="text-xl font-semibold mb-6">Suivez-nous</h4> <div class="flex space-x-6"> <a${addAttribute("#", "href")} class="text-green-100 hover:text-secondary transition-colors text-lg">
Facebook
</a> <a${addAttribute("#", "href")} class="text-green-100 hover:text-secondary transition-colors text-lg">
Instagram
</a> <a${addAttribute("#", "href")} class="text-green-100 hover:text-secondary transition-colors text-lg">
Twitter
</a> </div> </div> </div> <div class="border-t border-green-600 mt-12 pt-12 text-center"> <p class="text-green-100 text-lg">
© 2025 CCSLR St Joseph Basketball Club. Tous droits réservés.
</p> </div> </div> </footer>`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/layout/Footer.astro", void 0);

export { $$NavigationBar as $, $$Footer as a };

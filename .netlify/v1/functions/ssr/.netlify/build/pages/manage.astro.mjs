/* empty css                                           */
import { c as createComponent, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_BAntvzzV.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from '../chunks/AdminLayout_B1aUlrCE.mjs';
import { useSSRContext, mergeProps, h, createVNode, resolveDynamicComponent, defineComponent, ref, onMounted, computed, withCtx, toDisplayString, withDirectives, createTextVNode, vModelText, createBlock, createCommentVNode, openBlock, Fragment, renderList, watch } from 'vue';
import { _ as _export_sfc, u as useAuthStore } from '../chunks/_plugin-vue_export-helper_ceIx8-CJ.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderVNode, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from 'vue/server-renderer';
import { u as useApi } from '../chunks/useApi_BbvW2iJx.mjs';
import { defineStore } from 'pinia';
import { M as Modal } from '../chunks/Modal_B79pGo29.mjs';
import { ErrorMessage, Field, Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { u as userSchema, t as teamSchema, m as matchSchema } from '../chunks/index_CCeK9fKT.mjs';
import { P as PlayerStatsDashboard } from '../chunks/PlayerStatsDashboard_i8gk7dPl.mjs';
import { T as TeamStatsDashboard } from '../chunks/TeamStatsDashboard_By8pvC0M.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const _sfc_main$l = {
  __name: 'HeaderBar',
  props: {
    adminName: String
  },
  emits: ['logout', 'toggle-sidebar'],
  setup(__props, { expose: __expose }) {
  __expose();

  
  

const __returned__ = {  };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${
    ssrRenderAttrs(mergeProps({ class: "bg-white shadow-sm border-b border-gray-200 px-4 py-3 md:px-6 md:py-4" }, _attrs))
  }><div class="flex items-center justify-between"><div class="flex items-center space-x-3 md:space-x-4"><button class="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"><span class="sr-only">Ouvrir le menu</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button><div class="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0"><div class="w-8 h-8 md:w-10 md:h-10 bg-green-700 rounded-md flex items-center justify-center"><span class="text-white font-bold text-base md:text-lg">CC</span></div></div><div><h1 class="text-lg md:text-xl font-bold text-gray-900 truncate max-w-[150px] md:max-w-none"> CCSLR Saint Joseph </h1><p class="text-xs md:text-sm text-gray-600">Administration Dashboard</p></div></div><div class="flex items-center space-x-2 md:space-x-4"><div class="text-right hidden md:block"><p class="text-sm font-medium text-gray-900">${
    ssrInterpolate($props.adminName)
  }</p><p class="text-xs text-gray-500">Administrateur</p></div><a href="/dashboard" class="flex items-center space-x-2 px-3 py-2 md:px-4 md:py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200"><span class="text-sm font-medium hidden md:inline">Mon Dashboard</span></a><a href="/" class="flex items-center space-x-2 px-3 py-2 md:px-4 md:py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors duration-200"><span class="text-sm font-medium hidden md:inline">Accueil</span></a><button class="flex items-center space-x-2 px-3 py-2 md:px-4 md:py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg><span class="text-sm font-medium hidden md:inline">Déconnexion</span></button></div></div></header>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/HeaderBar.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : undefined
};
const HeaderBar = /*#__PURE__*/_export_sfc(_sfc_main$l, [['ssrRender',_sfc_ssrRender$l]]);

const _sfc_main$k = {
  __name: 'SidebarNavigation',
  props: {
  activeSection: String,
  isOpen: Boolean
},
  emits: ['section-change', 'close'],
  setup(__props, { expose: __expose }) {
  __expose();

const BarChart3 = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M3 3v18h18' }), h('path', { d: 'M18 17V9' }), h('path', { d: 'M13 17V5' }), h('path', { d: 'M8 17v-3' })]);
const Users = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }), h('circle', { cx: '9', cy: '7', r: '4' }), h('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }), h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })]);
const Shield = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })]);
const Calendar = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('rect', { width: '18', height: '18', x: '3', y: '4', rx: '2', ry: '2' }), h('line', { x1: '16', x2: '16', y1: '2', y2: '6' }), h('line', { x1: '8', x2: '8', y1: '2', y2: '6' }), h('line', { x1: '3', x2: '21', y1: '10', y2: '10' })]);
const Megaphone = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'm3 11 18-5v12L3 14v-3z' }), h('path', { d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6' })]);




const navigationItems = [
  { id: 'dashboard', label: 'Tableau de Bord', icon: BarChart3, description: 'Vue d\'ensemble' },
  { id: 'users', label: 'Gestion des Utilisateurs', icon: Users, description: 'Licenciés' },
  { id: 'teams', label: 'Gestion des Équipes', icon: Shield, description: 'Équipes et coaches' },
  { id: 'matches', label: 'Gestion des Matchs', icon: Calendar, description: 'Calendrier et résultats' },
  { id: 'events', label: 'Événements Publics', icon: Megaphone, description: 'Communication' },
  { id: 'categories', label: 'Gestion des Catégories', icon: Shield, description: 'Catégories d\'équipes' }
];

const __returned__ = { BarChart3, Users, Shield, Calendar, Megaphone, navigationItems, h };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.isOpen) {
    _push(`<div class="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 md:hidden transition-opacity"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<nav class="${ssrRenderClass([
      'fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:flex',
      $props.isOpen ? 'translate-x-0' : '-translate-x-full'
    ])}"><div class="p-4"><div class="flex items-center justify-between mb-4 md:hidden"><h2 class="text-lg font-semibold text-gray-900">Menu</h2><button class="text-gray-500 hover:text-gray-700"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><h2 class="text-lg font-semibold text-gray-900 mb-4 hidden md:block">Navigation</h2><ul class="space-y-2"><!--[-->`);
  ssrRenderList($setup.navigationItems, (item) => {
    _push(`<li><button class="${ssrRenderClass([
              'w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200',
              $props.activeSection === item.id ? 'bg-green-50 text-green-700 border border-green-200' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            ])}">`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
      class: [$props.activeSection === item.id ? 'text-green-600' : 'text-gray-500']
    }, null), _parent);
    _push(`<div class="flex-1"><p class="${
      ssrRenderClass(['text-sm font-medium', $props.activeSection === item.id ? 'text-green-700' : 'text-gray-900'])
    }">${
      ssrInterpolate(item.label)
    }</p><p class="${
      ssrRenderClass(['text-xs', $props.activeSection === item.id ? 'text-green-600' : 'text-gray-500'])
    }">${
      ssrInterpolate(item.description)
    }</p></div></button></li>`);
  });
  _push(`<!--]--></ul></div></nav></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/SidebarNavigation.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : undefined
};
const SidebarNavigation = /*#__PURE__*/_export_sfc(_sfc_main$k, [['ssrRender',_sfc_ssrRender$k]]);

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "DashboardOverview",
  setup(__props, { expose: __expose }) {
    __expose();
    const { fetchApi } = useApi();
    const stats = ref([]);
    const upcomingEvents = ref([]);
    const isLoading = ref(true);
    const error = ref(null);
    const Users = (props) => h("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [h("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), h("circle", { cx: "9", cy: "7", r: "4" }), h("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }), h("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })]);
    const Shield = (props) => h("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [h("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })]);
    const Calendar = (props) => h("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [h("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" }), h("line", { x1: "16", x2: "16", y1: "2", y2: "6" }), h("line", { x1: "8", x2: "8", y1: "2", y2: "6" }), h("line", { x1: "3", x2: "21", y1: "10", y2: "10" })]);
    const Megaphone = (props) => h("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [h("path", { d: "m3 11 18-5v12L3 14v-3z" }), h("path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" })]);
    const fetchDashboardData = async () => {
      isLoading.value = true;
      error.value = null;
      try {
        const response = await fetchApi("me/dashboard");
        if (!response) {
          throw new Error("Réponse vide du serveur");
        }
        stats.value = [
          { label: "Total Licenciés", value: response.totalUsers, icon: Users, color: "bg-blue-500" },
          { label: "Équipes Actives", value: response.activeTeams, icon: Shield, color: "bg-green-500" },
          { label: "Matchs ce mois-ci", value: response.matchesThisMonth, icon: Calendar, color: "bg-yellow-500" },
          { label: "Événements prévus", value: response.upcomingEventsCount, icon: Megaphone, color: "bg-purple-500" }
        ];
        const events = response.upcomingEvents;
        if (Array.isArray(events)) {
          upcomingEvents.value = events.map((event) => ({
            name: event.title,
            date: new Date(event.start_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
          }));
        } else {
          console.warn("upcomingEvents is not an array:", events);
          upcomingEvents.value = [];
        }
      } catch (e) {
        error.value = e.message || "Une erreur est survenue";
      } finally {
        isLoading.value = false;
      }
    };
    onMounted(fetchDashboardData);
    const __returned__ = { fetchApi, stats, upcomingEvents, isLoading, error, Users, Shield, Calendar, Megaphone, fetchDashboardData };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-2xl font-bold text-gray-900 mb-6">Vue d&#39;overview</h2>`);
  if ($setup.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des données du tableau de bord...</p></div>`);
  } else if ($setup.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.error)}</p></div>`);
  } else {
    _push(`<div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"><!--[-->`);
    ssrRenderList($setup.stats, (stat) => {
      _push(`<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center space-x-4"><div class="${ssrRenderClass([stat.color, "w-12 h-12 rounded-lg flex items-center justify-center"])}">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(stat.icon), { class: "text-white" }, null), _parent);
      _push(`</div><div><p class="text-sm text-gray-600">${ssrInterpolate(stat.label)}</p><p class="text-2xl font-bold text-gray-900">${ssrInterpolate(stat.value)}</p></div></div>`);
    });
    _push(`<!--]--></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><h3 class="text-lg font-semibold text-gray-900 mb-4">Répartition des licenciés</h3><div class="h-64 bg-gray-100 rounded-lg flex items-center justify-center"><p class="text-gray-500">[Chart Placeholder]</p></div></div><div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><h3 class="text-lg font-semibold text-gray-900 mb-4">Événements à venir</h3><ul class="space-y-4"><!--[-->`);
    ssrRenderList($setup.upcomingEvents, (event) => {
      _push(`<li class="flex items-center space-x-3"><div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg></div><div><p class="font-medium text-gray-800">${ssrInterpolate(event.name)}</p><p class="text-sm text-gray-500">${ssrInterpolate(event.date)}</p></div></li>`);
    });
    _push(`<!--]--></ul></div></div></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/manage/DashboardOverview.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const DashboardOverview = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);

const useUsersStore = defineStore("users", () => {
  const users = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const { fetchApi } = useApi();
  const setUsers = (newUsers) => {
    users.value = newUsers;
  };
  const setLoading = (status) => {
    isLoading.value = status;
  };
  const setError = (err) => {
    error.value = err;
  };
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchApi("users");
      setUsers(response.data);
    } catch (err) {
      setError(err.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };
  const createUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchApi("users", {
        method: "POST",
        body: JSON.stringify(userData)
      });
      users.value.push(response.data);
      return response.data;
    } catch (err) {
      setError(err.message || "Une erreur est survenue");
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return { users, isLoading, error, setUsers, setLoading, setError, fetchUsers, createUser };
});

const useStatsModalStore = defineStore("statsModal", () => {
  const isOpen = ref(false);
  const playerId = ref(null);
  const openModal = (id) => {
    playerId.value = id;
    isOpen.value = true;
  };
  const closeModal = () => {
    isOpen.value = false;
    playerId.value = null;
  };
  return { isOpen, playerId, openModal, closeModal };
});

const _sfc_main$i = {
  __name: 'UserForm',
  props: {
  initialData: {
    type: Object,
    default: null
  }
},
  emits: ['submit', 'cancel'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;

const validationSchema = computed(() => {
  return toTypedSchema(userSchema);
});

const initialValues = computed(() => {
  if (props.initialData) {
    return {
      ...props.initialData,
      user_type_id: props.initialData.user_type_id, 
    };
  }
  return {
    firstname: '',
    lastname: '',
    email: '',
    licence_number: '',
    user_type_id: '',
  };
});

const onSubmit = (values) => {
  emit('submit', values);
};

const __returned__ = { props, emit, validationSchema, initialValues, onSubmit, computed, get Form() { return Form }, get Field() { return Field }, get ErrorMessage() { return ErrorMessage }, get toTypedSchema() { return toTypedSchema }, get userSchema() { return userSchema } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["Form"], mergeProps({
    onSubmit: $setup.onSubmit,
    "validation-schema": $setup.validationSchema,
    "initial-values": $setup.initialValues,
    class: "space-y-4"
  }, _attrs), {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div${
          _scopeId
        }><label for="firstname" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Prénom</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "firstname",
          type: "text",
          id: "firstname",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "firstname",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div${
          _scopeId
        }><label for="lastname" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Nom</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "lastname",
          type: "text",
          id: "lastname",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "lastname",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div${
          _scopeId
        }><label for="email" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Email</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "email",
          type: "email",
          id: "email",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "email",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div${
          _scopeId
        }><label for="licence_number" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>N° Licence</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "licence_number",
          type: "text",
          id: "licence_number",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "licence_number",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div${
          _scopeId
        }><label for="user_type_id" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Type d&#39;utilisateur</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "user_type_id",
          as: "select",
          id: "user_type_id",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<option value=""${
                _scopeId
              }>Sélectionner un type</option><option value="1"${
                _scopeId
              }>Licencié</option><option value="2"${
                _scopeId
              }>Coach</option><option value="3"${
                _scopeId
              }>Staff</option><option value="4"${
                _scopeId
              }>Président</option><option value="5"${
                _scopeId
              }>Admin</option>`);
            } else {
              return [
                createVNode("option", { value: "" }, "Sélectionner un type"),
                createVNode("option", { value: "1" }, "Licencié"),
                createVNode("option", { value: "2" }, "Coach"),
                createVNode("option", { value: "3" }, "Staff"),
                createVNode("option", { value: "4" }, "Président"),
                createVNode("option", { value: "5" }, "Admin")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "user_type_id",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div class="flex justify-end space-x-3 mt-6"${
          _scopeId
        }><button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"${
          _scopeId
        }>${
          ssrInterpolate($props.initialData ? 'Modifier' : 'Créer')
        }</button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("label", {
              for: "firstname",
              class: "block text-sm font-medium text-gray-700"
            }, "Prénom"),
            createVNode($setup["Field"], {
              name: "firstname",
              type: "text",
              id: "firstname",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }),
            createVNode($setup["ErrorMessage"], {
              name: "firstname",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "lastname",
              class: "block text-sm font-medium text-gray-700"
            }, "Nom"),
            createVNode($setup["Field"], {
              name: "lastname",
              type: "text",
              id: "lastname",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }),
            createVNode($setup["ErrorMessage"], {
              name: "lastname",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "email",
              class: "block text-sm font-medium text-gray-700"
            }, "Email"),
            createVNode($setup["Field"], {
              name: "email",
              type: "email",
              id: "email",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }),
            createVNode($setup["ErrorMessage"], {
              name: "email",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "licence_number",
              class: "block text-sm font-medium text-gray-700"
            }, "N° Licence"),
            createVNode($setup["Field"], {
              name: "licence_number",
              type: "text",
              id: "licence_number",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }),
            createVNode($setup["ErrorMessage"], {
              name: "licence_number",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "user_type_id",
              class: "block text-sm font-medium text-gray-700"
            }, "Type d'utilisateur"),
            createVNode($setup["Field"], {
              name: "user_type_id",
              as: "select",
              id: "user_type_id",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }, {
              default: withCtx(() => [
                createVNode("option", { value: "" }, "Sélectionner un type"),
                createVNode("option", { value: "1" }, "Licencié"),
                createVNode("option", { value: "2" }, "Coach"),
                createVNode("option", { value: "3" }, "Staff"),
                createVNode("option", { value: "4" }, "Président"),
                createVNode("option", { value: "5" }, "Admin")
              ]),
              _: 1
            }),
            createVNode($setup["ErrorMessage"], {
              name: "user_type_id",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", { class: "flex justify-end space-x-3 mt-6" }, [
            createVNode("button", {
              type: "submit",
              class: "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            }, toDisplayString($props.initialData ? 'Modifier' : 'Créer'), 1)
          ])
        ]
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/forms/UserForm.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : undefined
};
const UserForm = /*#__PURE__*/_export_sfc(_sfc_main$i, [['ssrRender',_sfc_ssrRender$i]]);

const _sfc_main$h = {
  __name: 'UserManagement',
  setup(__props, { expose: __expose }) {
  __expose();

const { fetchApi } = useApi();
const usersStore = useUsersStore();
const statsModalStore = useStatsModalStore();

const searchTerm = ref('');
const showForm = ref(false);
const currentEditingUser = ref(null);
const showDeleteConfirm = ref(false);
const userToDelete = ref(null);
const deleteConfirmationInput = ref('');

const filteredUsers = computed(() => {
  if (!usersStore.users) return [];
  const lowerCaseSearch = searchTerm.value.toLowerCase();
  return usersStore.users.filter(user =>
    (user.firstname || '').toLowerCase().includes(lowerCaseSearch) ||
    (user.lastname || '').toLowerCase().includes(lowerCaseSearch) ||
    (user.email || '').toLowerCase().includes(lowerCaseSearch) ||
    (user.licence_number || '').toLowerCase().includes(lowerCaseSearch)
  );
});

const fetchUsers = async () => {
  usersStore.setLoading(true);
  usersStore.setError(null);
  try {
    const response = await fetchApi('users');
    usersStore.setUsers(response.data);
  } catch (e) {
    usersStore.setError(e.message);
  } finally {
    usersStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingUser.value = null;
  showForm.value = true;
};

const openEditModal = (user) => {
  currentEditingUser.value = { ...user };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingUser.value = null;
};

const handleUserFormSubmit = async (formData) => {
  usersStore.setLoading(true);
  usersStore.setError(null);
  try {
    if (currentEditingUser.value) {
      // Update existing user
      await fetchApi(`users/${currentEditingUser.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      // Create new user
      await fetchApi('users', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchUsers(); // Refresh the list
    closeModal();
  } catch (e) {
    usersStore.setError(e.message);
  } finally {
    usersStore.setLoading(false);
  }
};

const confirmDeleteUser = (user) => {
  userToDelete.value = user;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = ''; // Clear input on open
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  userToDelete.value = null;
  deleteConfirmationInput.value = ''; // Clear input on close
};

const executeDelete = async () => {
  if (!userToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    // Optionally, show an error message if confirmation is incorrect
    return;
  }

  usersStore.setLoading(true);
  usersStore.setError(null);
  try {
    await fetchApi(`users/${userToDelete.value.id}`, { method: 'DELETE' });
    await fetchUsers(); // Refresh the list
    cancelDelete();
  } catch (e) {
    usersStore.setError(e.message);
  } finally {
    usersStore.setLoading(false);
  }
};

onMounted(fetchUsers);

const __returned__ = { fetchApi, usersStore, statsModalStore, searchTerm, showForm, currentEditingUser, showDeleteConfirm, userToDelete, deleteConfirmationInput, filteredUsers, fetchUsers, openCreateModal, openEditModal, closeModal, handleUserFormSubmit, confirmDeleteUser, cancelDelete, executeDelete, ref, onMounted, computed, get useApi() { return useApi }, get useUsersStore() { return useUsersStore }, get useStatsModalStore() { return useStatsModalStore }, Modal, UserForm, PlayerStatsDashboard };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="space-y-6"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-gray-900">Gestion des Utilisateurs</h1><p class="text-gray-600">Gérer les licenciés du club</p></div><button class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg><span>Nouveau Licencié</span></button></div><div class="bg-white rounded-xl border border-gray-200 p-6"><div class="flex items-center space-x-4 mb-6"><div class="relative flex-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><input type="text" placeholder="Rechercher par nom, prénom, licence..."${ssrRenderAttr("value", $setup.searchTerm)} class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></div><button class="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg><span>Filtres</span></button></div>`);
  if ($setup.usersStore.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des utilisateurs...</p></div>`);
  } else if ($setup.usersStore.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.usersStore.error)}</p></div>`);
  } else {
    _push(`<div><div class="hidden md:block overflow-x-auto"><table class="w-full"><thead><tr class="border-b border-gray-200"><th class="text-left py-3 px-4 font-medium text-gray-900">Nom</th><th class="text-left py-3 px-4 font-medium text-gray-900">Prénom</th><th class="text-left py-3 px-4 font-medium text-gray-900">N° Licence</th><th class="text-left py-3 px-4 font-medium text-gray-900">Équipe</th><th class="text-left py-3 px-4 font-medium text-gray-900">Catégorie</th><th class="text-left py-3 px-4 font-medium text-gray-900">Email</th><th class="text-right py-3 px-4 font-medium text-gray-900">Actions</th></tr></thead><tbody><!--[-->`);
    ssrRenderList($setup.filteredUsers, (user) => {
      _push(`<tr class="border-b border-gray-100 hover:bg-gray-50"><td class="py-3 px-4">${
        ssrInterpolate(user.lastname)
      }</td><td class="py-3 px-4">${
        ssrInterpolate(user.firstname)
      }</td><td class="py-3 px-4">${
        ssrInterpolate(user.licence_number)
      }</td><td class="py-3 px-4">${
        ssrInterpolate(user.teams && user.teams.length > 0 ? user.teams[0].name : 'N/A')
      }</td><td class="py-3 px-4">${
        ssrInterpolate(user.teams && user.teams.length > 0 && user.teams[0].category ? user.teams[0].category.name : 'N/A')
      }</td><td class="py-3 px-4">${
        ssrInterpolate(user.email)
      }</td><td class="py-3 px-4"><div class="flex items-center justify-end space-x-2"><button class="p-1 text-purple-600 hover:bg-purple-50 rounded" title="Voir les statistiques"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></button><button class="p-1 text-blue-600 hover:bg-blue-50 rounded" title="Modifier"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></button><button class="p-1 text-red-600 hover:bg-red-50 rounded" title="Supprimer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button></div></td></tr>`);
    });
    _push(`<!--]--></tbody></table></div><div class="md:hidden space-y-4"><!--[-->`);
    ssrRenderList($setup.filteredUsers, (user) => {
      _push(`<div class="bg-gray-50 rounded-lg p-4 border border-gray-200"><div class="flex justify-between items-start mb-3"><div><h3 class="font-bold text-gray-900">${
        ssrInterpolate(user.firstname)
      } ${
        ssrInterpolate(user.lastname)
      }</h3><p class="text-sm text-gray-500">${
        ssrInterpolate(user.licence_number)
      }</p></div><div class="flex space-x-1"><button class="p-2 text-purple-600 bg-white border border-gray-200 rounded-lg shadow-sm" title="Voir les statistiques"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></button><button class="p-2 text-blue-600 bg-white border border-gray-200 rounded-lg shadow-sm" title="Modifier"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></button><button class="p-2 text-red-600 bg-white border border-gray-200 rounded-lg shadow-sm" title="Supprimer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button></div></div><div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-gray-500">Équipe:</span><span class="font-medium text-gray-900">${
        ssrInterpolate(user.teams && user.teams.length > 0 ? user.teams[0].name : 'N/A')
      }</span></div><div class="flex justify-between"><span class="text-gray-500">Catégorie:</span><span class="font-medium text-gray-900">${
        ssrInterpolate(user.teams && user.teams.length > 0 && user.teams[0].category ? user.teams[0].category.name : 'N/A')
      }</span></div><div class="flex justify-between"><span class="text-gray-500">Email:</span><span class="font-medium text-gray-900 break-all">${
        ssrInterpolate(user.email)
      }</span></div></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  }
  _push(`</div></div>`);
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.showForm,
    title: $setup.currentEditingUser ? 'Modifier un Licencié' : 'Créer un nouveau Licencié',
    onClose: $setup.closeModal
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent($setup["UserForm"], {
          initialData: $setup.currentEditingUser,
          onSubmit: $setup.handleUserFormSubmit
        }, null, _parent, _scopeId));
      } else {
        return [
          createVNode($setup["UserForm"], {
            initialData: $setup.currentEditingUser,
            onSubmit: $setup.handleUserFormSubmit
          }, null, 8, ["initialData"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.showDeleteConfirm,
    title: "Confirmer la suppression",
    onClose: $setup.cancelDelete
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="mb-4"${
          _scopeId
        }>Êtes-vous sûr de vouloir supprimer l&#39;utilisateur <strong${
          _scopeId
        }>${
          ssrInterpolate($setup.userToDelete ? $setup.userToDelete.firstname + ' ' + $setup.userToDelete.lastname : '')
        }</strong> ? Cette action est irréversible.</p><p class="mb-2"${
          _scopeId
        }>Pour confirmer, veuillez taper &quot;supprimer&quot; dans le champ ci-dessous :</p><input type="text"${
          ssrRenderAttr("value", $setup.deleteConfirmationInput)
        } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"${
          _scopeId
        }>`);
      } else {
        return [
          createVNode("p", { class: "mb-4" }, [
            createTextVNode("Êtes-vous sûr de vouloir supprimer l'utilisateur "),
            createVNode("strong", null, toDisplayString($setup.userToDelete ? $setup.userToDelete.firstname + ' ' + $setup.userToDelete.lastname : ''), 1),
            createTextVNode(" ? Cette action est irréversible.")
          ]),
          createVNode("p", { class: "mb-2" }, "Pour confirmer, veuillez taper \"supprimer\" dans le champ ci-dessous :"),
          withDirectives(createVNode("input", {
            type: "text",
            "onUpdate:modelValue": $event => (($setup.deleteConfirmationInput) = $event),
            class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          }, null, 8, ["onUpdate:modelValue"]), [
            [vModelText, $setup.deleteConfirmationInput]
          ])
        ]
      }
    }),
    footer: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2"${
          _scopeId
        }>Annuler</button><button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"${
          (ssrIncludeBooleanAttr($setup.deleteConfirmationInput !== 'supprimer')) ? " disabled" : ""
        }${
          _scopeId
        }>Supprimer</button>`);
      } else {
        return [
          createVNode("button", {
            class: "px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2",
            onClick: $setup.cancelDelete
          }, "Annuler"),
          createVNode("button", {
            class: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
            disabled: $setup.deleteConfirmationInput !== 'supprimer',
            onClick: $setup.executeDelete
          }, "Supprimer", 8, ["disabled"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.statsModalStore.isOpen,
    title: "Statistiques du Joueur",
    onClose: $setup.statsModalStore.closeModal
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        if ($setup.statsModalStore.playerId) {
          _push(ssrRenderComponent($setup["PlayerStatsDashboard"], {
            key: $setup.statsModalStore.playerId,
            "player-id": $setup.statsModalStore.playerId
          }, null, _parent, _scopeId));
        } else {
          _push(`<!---->`);
        }
      } else {
        return [
          ($setup.statsModalStore.playerId)
            ? (openBlock(), createBlock($setup["PlayerStatsDashboard"], {
                key: $setup.statsModalStore.playerId,
                "player-id": $setup.statsModalStore.playerId
              }, null, 8, ["player-id"]))
            : createCommentVNode("", true)
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/management/UserManagement.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : undefined
};
const UserManagement = /*#__PURE__*/_export_sfc(_sfc_main$h, [['ssrRender',_sfc_ssrRender$h]]);

const useTeamsStore = defineStore("teams", () => {
  const teams = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const { fetchApi } = useApi();
  const setTeams = (newTeams) => {
    teams.value = newTeams;
  };
  const setLoading = (status) => {
    isLoading.value = status;
  };
  const setError = (err) => {
    error.value = err;
  };
  const fetchTeams = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchApi("teams");
      setTeams(response.data);
    } catch (err) {
      setError(err.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };
  const createTeam = async (teamData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchApi("teams", {
        method: "POST",
        body: JSON.stringify(teamData)
      });
      teams.value.push(response.data);
      return response.data;
    } catch (err) {
      setError(err.message || "Une erreur est survenue");
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return { teams, isLoading, error, setTeams, setLoading, setError, fetchTeams, createTeam };
});

const useTeamStatsModalStore = defineStore("teamStatsModal", () => {
  const isOpen = ref(false);
  const teamId = ref(null);
  const openModal = (id) => {
    teamId.value = id;
    isOpen.value = true;
  };
  const closeModal = () => {
    isOpen.value = false;
    teamId.value = null;
  };
  return { isOpen, teamId, openModal, closeModal };
});

const _sfc_main$g = {
  __name: 'TeamForm',
  props: {
  initialData: {
    type: Object,
    default: null
  }
},
  emits: ['submit', 'cancel'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;
const { fetchApi } = useApi();

const categories = ref([]);
const coaches = ref([]);
const seasons = ref([]);

const validationSchema = toTypedSchema(teamSchema);

const fetchDependencies = async () => {
  try {
    const [categoriesRes, usersRes, seasonsRes] = await Promise.all([
      fetchApi('categories'),
      fetchApi('users'),
      fetchApi('seasons'),
    ]);
    categories.value = categoriesRes.data;
    coaches.value = usersRes.data.filter(user => user.user_type.name === 'coach');
    seasons.value = seasonsRes.data;
  } catch (e) {
    console.error("Error fetching form dependencies:", e);
  }
};

onMounted(fetchDependencies);

const initialValues = computed(() => {
  if (props.initialData) {
    return {
      ...props.initialData,
      // Ensure IDs are numbers
      category_id: props.initialData.category_id,
      coach_id: props.initialData.coach_id,
      season_id: props.initialData.season_id,
    };
  }
  
  // Default values for new team
  const activeSeason = seasons.value.find(s => s.is_active);
  return {
    name: '',
    category_id: '',
    coach_id: null,
    season_id: activeSeason ? activeSeason.id : '',
    gender: '',
  };
});

const onSubmit = (values) => {
  emit('submit', values);
};

const __returned__ = { props, emit, fetchApi, categories, coaches, seasons, validationSchema, fetchDependencies, initialValues, onSubmit, ref, onMounted, computed, get useApi() { return useApi }, get Form() { return Form }, get Field() { return Field }, get ErrorMessage() { return ErrorMessage }, get toTypedSchema() { return toTypedSchema }, get teamSchema() { return teamSchema } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["Form"], mergeProps({
    onSubmit: $setup.onSubmit,
    "validation-schema": $setup.validationSchema,
    "initial-values": $setup.initialValues,
    class: "space-y-4"
  }, _attrs), {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div${
          _scopeId
        }><label for="name" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Nom de l&#39;équipe</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "name",
          type: "text",
          id: "name",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "name",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div${
          _scopeId
        }><label for="category_id" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Catégorie</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "category_id",
          as: "select",
          id: "category_id",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<option value=""${_scopeId}>Sélectionner une catégorie</option><!--[-->`);
              ssrRenderList($setup.categories, (category) => {
                _push(`<option${
                  ssrRenderAttr("value", category.id)
                }${
                  _scopeId
                }>${
                  ssrInterpolate(category.title)
                }</option>`);
              });
              _push(`<!--]-->`);
            } else {
              return [
                createVNode("option", { value: "" }, "Sélectionner une catégorie"),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.categories, (category) => {
                  return (openBlock(), createBlock("option", {
                    key: category.id,
                    value: category.id
                  }, toDisplayString(category.title), 9, ["value"]))
                }), 128))
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "category_id",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div${
          _scopeId
        }><label for="coach_id" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Coach</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "coach_id",
          as: "select",
          id: "coach_id",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<option value=""${_scopeId}>Sélectionner un coach (optionnel)</option><!--[-->`);
              ssrRenderList($setup.coaches, (coach) => {
                _push(`<option${
                  ssrRenderAttr("value", coach.id)
                }${
                  _scopeId
                }>${
                  ssrInterpolate(coach.firstname)
                } ${
                  ssrInterpolate(coach.lastname)
                }</option>`);
              });
              _push(`<!--]-->`);
            } else {
              return [
                createVNode("option", { value: "" }, "Sélectionner un coach (optionnel)"),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.coaches, (coach) => {
                  return (openBlock(), createBlock("option", {
                    key: coach.id,
                    value: coach.id
                  }, toDisplayString(coach.firstname) + " " + toDisplayString(coach.lastname), 9, ["value"]))
                }), 128))
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "coach_id",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div${
          _scopeId
        }><label for="season_id" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Saison</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "season_id",
          as: "select",
          id: "season_id",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<option value=""${_scopeId}>Sélectionner une saison</option><!--[-->`);
              ssrRenderList($setup.seasons, (season) => {
                _push(`<option${
                  ssrRenderAttr("value", season.id)
                }${
                  _scopeId
                }>${
                  ssrInterpolate(season.name)
                }</option>`);
              });
              _push(`<!--]-->`);
            } else {
              return [
                createVNode("option", { value: "" }, "Sélectionner une saison"),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.seasons, (season) => {
                  return (openBlock(), createBlock("option", {
                    key: season.id,
                    value: season.id
                  }, toDisplayString(season.name), 9, ["value"]))
                }), 128))
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "season_id",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div${
          _scopeId
        }><label for="gender" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Genre</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "gender",
          as: "select",
          id: "gender",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<option value=""${
                _scopeId
              }>Sélectionner un genre</option><option value="M"${
                _scopeId
              }>Masculin</option><option value="F"${
                _scopeId
              }>Féminin</option><option value="X"${
                _scopeId
              }>Mixte</option>`);
            } else {
              return [
                createVNode("option", { value: "" }, "Sélectionner un genre"),
                createVNode("option", { value: "M" }, "Masculin"),
                createVNode("option", { value: "F" }, "Féminin"),
                createVNode("option", { value: "X" }, "Mixte")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "gender",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div class="flex justify-end space-x-3 mt-6"${
          _scopeId
        }><button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"${
          _scopeId
        }>${
          ssrInterpolate($props.initialData ? 'Modifier' : 'Créer')
        }</button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("label", {
              for: "name",
              class: "block text-sm font-medium text-gray-700"
            }, "Nom de l'équipe"),
            createVNode($setup["Field"], {
              name: "name",
              type: "text",
              id: "name",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }),
            createVNode($setup["ErrorMessage"], {
              name: "name",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "category_id",
              class: "block text-sm font-medium text-gray-700"
            }, "Catégorie"),
            createVNode($setup["Field"], {
              name: "category_id",
              as: "select",
              id: "category_id",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }, {
              default: withCtx(() => [
                createVNode("option", { value: "" }, "Sélectionner une catégorie"),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.categories, (category) => {
                  return (openBlock(), createBlock("option", {
                    key: category.id,
                    value: category.id
                  }, toDisplayString(category.title), 9, ["value"]))
                }), 128))
              ]),
              _: 1
            }),
            createVNode($setup["ErrorMessage"], {
              name: "category_id",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "coach_id",
              class: "block text-sm font-medium text-gray-700"
            }, "Coach"),
            createVNode($setup["Field"], {
              name: "coach_id",
              as: "select",
              id: "coach_id",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }, {
              default: withCtx(() => [
                createVNode("option", { value: "" }, "Sélectionner un coach (optionnel)"),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.coaches, (coach) => {
                  return (openBlock(), createBlock("option", {
                    key: coach.id,
                    value: coach.id
                  }, toDisplayString(coach.firstname) + " " + toDisplayString(coach.lastname), 9, ["value"]))
                }), 128))
              ]),
              _: 1
            }),
            createVNode($setup["ErrorMessage"], {
              name: "coach_id",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "season_id",
              class: "block text-sm font-medium text-gray-700"
            }, "Saison"),
            createVNode($setup["Field"], {
              name: "season_id",
              as: "select",
              id: "season_id",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }, {
              default: withCtx(() => [
                createVNode("option", { value: "" }, "Sélectionner une saison"),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.seasons, (season) => {
                  return (openBlock(), createBlock("option", {
                    key: season.id,
                    value: season.id
                  }, toDisplayString(season.name), 9, ["value"]))
                }), 128))
              ]),
              _: 1
            }),
            createVNode($setup["ErrorMessage"], {
              name: "season_id",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "gender",
              class: "block text-sm font-medium text-gray-700"
            }, "Genre"),
            createVNode($setup["Field"], {
              name: "gender",
              as: "select",
              id: "gender",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }, {
              default: withCtx(() => [
                createVNode("option", { value: "" }, "Sélectionner un genre"),
                createVNode("option", { value: "M" }, "Masculin"),
                createVNode("option", { value: "F" }, "Féminin"),
                createVNode("option", { value: "X" }, "Mixte")
              ]),
              _: 1
            }),
            createVNode($setup["ErrorMessage"], {
              name: "gender",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", { class: "flex justify-end space-x-3 mt-6" }, [
            createVNode("button", {
              type: "submit",
              class: "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            }, toDisplayString($props.initialData ? 'Modifier' : 'Créer'), 1)
          ])
        ]
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/forms/TeamForm.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : undefined
};
const TeamForm = /*#__PURE__*/_export_sfc(_sfc_main$g, [['ssrRender',_sfc_ssrRender$g]]);

const _sfc_main$f = {
  __name: 'TeamCalendar',
  props: {
  teamId: {
    type: Number,
    required: true
  }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const { fetchApi } = useApi();
const matches = ref([]);
const isLoading = ref(false);
const error = ref(null);

const fetchTeamMatches = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    // Fetch past matches for the specific team
    const response = await fetchApi(`encounters?team_id=${props.teamId}&filter=past`);
    matches.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchTeamMatches);

watch(() => props.teamId, () => {
  fetchTeamMatches();
});

const __returned__ = { props, fetchApi, matches, isLoading, error, fetchTeamMatches, ref, onMounted, watch, get useApi() { return useApi } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($setup.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des matchs...</p></div>`);
  } else if ($setup.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.error)}</p></div>`);
  } else if ($setup.matches.length) {
    _push(`<div><ul class="space-y-4"><!--[-->`);
    ssrRenderList($setup.matches, (match) => {
      _push(`<li class="${
        ssrRenderClass([{
          'bg-green-50 border-green-200 hover:bg-green-100': match.is_victory === true,
          'bg-red-50 border-red-200 hover:bg-red-100': match.is_victory === false,
          'border-gray-100 hover:bg-gray-50': match.is_victory == null
        }, "relative flex items-center justify-between p-4 rounded-lg border transition-colors duration-200"])
      }"><div class="flex items-center space-x-4"><div class="text-center w-16"><div class="text-sm font-medium text-gray-900">${
        ssrInterpolate(new Date(match.happens_at).toLocaleDateString('fr-FR', { weekday: 'short' }).toUpperCase())
      }</div><div class="text-xs text-gray-500">${
        ssrInterpolate(new Date(match.happens_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }).toUpperCase())
      }</div></div><div class="flex items-center space-x-2"><span class="text-sm text-gray-600">${
        ssrInterpolate(new Date(match.happens_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }))
      }</span></div><div class="flex items-center space-x-4"><span class="${
        ssrRenderClass([{'font-bold': match.is_at_home}, "font-medium"])
      }">${
        ssrInterpolate(match.is_at_home ? match.team.name : match.opponent)
      }</span><span class="text-gray-400">vs</span><span class="${
        ssrRenderClass([{'font-bold': !match.is_at_home}, "font-medium"])
      }">${
        ssrInterpolate(match.is_at_home ? match.opponent : match.team.name)
      }</span></div><div class="flex items-center space-x-2"><span class="text-sm text-gray-600">${
        ssrInterpolate(match.location || 'N/A')
      }</span></div></div>`);
      if (match.team_score != null && match.opponent_score != null) {
        _push(`<div class="text-right"><div class="${
          ssrRenderClass([{
              'text-green-700': match.is_victory,
              'text-red-700': match.is_victory === false,
              'text-gray-800': match.is_victory == null
            }, "font-bold text-lg"])
        }">${
          ssrInterpolate(match.team_score)
        } - ${
          ssrInterpolate(match.opponent_score)
        }</div>`);
        if (match.is_victory) {
          _push(`<div class="text-xs font-semibold text-green-600">VICTOIRE</div>`);
        } else if (match.is_victory === false) {
          _push(`<div class="text-xs font-semibold text-red-600">DÉFAITE</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Aucun match passé trouvé pour cette équipe.</p></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/management/TeamCalendar.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : undefined
};
const TeamCalendar = /*#__PURE__*/_export_sfc(_sfc_main$f, [['ssrRender',_sfc_ssrRender$f]]);

const _sfc_main$e = {
  __name: 'TeamRosterStats',
  props: {
  teamId: {
    type: [Number, String],
    required: true
  }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const { fetchApi } = useApi();
const isLoading = ref(false);
const error = ref(null);
const players = ref([]);

const fetchPlayersStats = async (id) => {
  if (!id) return;
  isLoading.value = true;
  error.value = null;
  players.value = [];

  try {
    const response = await fetchApi(`teams/${id}/stats/players`);
    players.value = response;
  } catch (e) {
    error.value = e.message || 'Erreur lors du chargement des statistiques joueurs.';
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};

const getPercentageColor = (percentage) => {
  if (percentage >= 50) return 'text-green-600 font-medium';
  if (percentage >= 35) return 'text-blue-600';
  if (percentage >= 0) return 'text-gray-600';
  return 'text-gray-400';
};

onMounted(() => {
  fetchPlayersStats(props.teamId);
});

watch(() => props.teamId, (newId) => {
  fetchPlayersStats(newId);
});

const __returned__ = { props, fetchApi, isLoading, error, players, fetchPlayersStats, getPercentageColor, ref, onMounted, watch, get useApi() { return useApi } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
  if ($setup.isLoading) {
    _push(`<div class="flex justify-center items-center h-64"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>`);
  } else if ($setup.error) {
    _push(`<div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-md"><div class="flex"><div class="flex-shrink-0"><svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg></div><div class="ml-3"><p class="text-sm text-red-700">${ssrInterpolate($setup.error)}</p></div></div></div>`);
  } else if ($setup.players.length > 0) {
    _push(`<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"><div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">Joueur</th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">MJ</th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">PTS</th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">REB</th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">PAD</th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">INT</th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">BP</th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">FTR</th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">%TIR</th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">%3PT</th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">%LF</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
    ssrRenderList($setup.players, (player) => {
      _push(`<tr class="hover:bg-gray-50 transition-colors"><td class="px-6 py-4 whitespace-nowrap sticky left-0 bg-white z-10 border-r border-gray-100"><div class="text-sm font-medium text-gray-900">${
        ssrInterpolate(player.firstname)
      } ${
        ssrInterpolate(player.lastname)
      }</div></td><td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">${
        ssrInterpolate(player.matchesPlayed)
      }</td><td class="px-4 py-4 whitespace-nowrap text-center text-sm font-bold text-gray-900">${
        ssrInterpolate(player.avgPoints)
      }</td><td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">${
        ssrInterpolate(player.avgRebounds)
      }</td><td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">${
        ssrInterpolate(player.avgAssists)
      }</td><td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">${
        ssrInterpolate(player.avgSteals)
      }</td><td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">${
        ssrInterpolate(player.avgTurnovers)
      }</td><td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">${
        ssrInterpolate(player.avgFouls)
      }</td><td class="${
        ssrRenderClass([$setup.getPercentageColor(player.fgPercentage), "px-4 py-4 whitespace-nowrap text-center text-sm"])
      }">${
        ssrInterpolate(player.fgPercentage)
      }%</td><td class="${
        ssrRenderClass([$setup.getPercentageColor(player.threePtPercentage), "px-4 py-4 whitespace-nowrap text-center text-sm"])
      }">${
        ssrInterpolate(player.threePtPercentage)
      }%</td><td class="${
        ssrRenderClass([$setup.getPercentageColor(player.ftPercentage), "px-4 py-4 whitespace-nowrap text-center text-sm"])
      }">${
        ssrInterpolate(player.ftPercentage)
      }%</td></tr>`);
    });
    _push(`<!--]--></tbody></table></div></div>`);
  } else {
    _push(`<div class="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200"><p class="text-gray-500">Aucun joueur ou statistique disponible pour cette équipe.</p></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/stats/TeamRosterStats.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : undefined
};
const TeamRosterStats = /*#__PURE__*/_export_sfc(_sfc_main$e, [['ssrRender',_sfc_ssrRender$e]]);

const _sfc_main$d = {
  __name: 'TeamDetails',
  props: {
  teamId: {
    type: Number,
    required: true
  }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const activeTab = ref('stats');

const __returned__ = { props, activeTab, ref, TeamStatsDashboard, TeamCalendar, TeamRosterStats };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(_attrs)
  } data-v-db0d8864><div class="flex border-b border-gray-200 mb-6" data-v-db0d8864><button class="${
    ssrRenderClass([$setup.activeTab === 'stats' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', "px-6 py-3 text-sm font-medium transition-colors duration-200 border-b-2"])
  }" data-v-db0d8864> Statistiques </button><button class="${
    ssrRenderClass([$setup.activeTab === 'calendar' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', "px-6 py-3 text-sm font-medium transition-colors duration-200 border-b-2"])
  }" data-v-db0d8864> Calendrier &amp; Résultats </button><button class="${
    ssrRenderClass([$setup.activeTab === 'roster' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', "px-6 py-3 text-sm font-medium transition-colors duration-200 border-b-2"])
  }" data-v-db0d8864> Joueurs </button></div><div class="min-h-[400px]" data-v-db0d8864>`);
  if ($setup.activeTab === 'stats') {
    _push(`<div data-v-db0d8864>`);
    _push(ssrRenderComponent($setup["TeamStatsDashboard"], { "team-id": $props.teamId }, null, _parent));
    _push(`</div>`);
  } else if ($setup.activeTab === 'calendar') {
    _push(`<div data-v-db0d8864>`);
    _push(ssrRenderComponent($setup["TeamCalendar"], { "team-id": $props.teamId }, null, _parent));
    _push(`</div>`);
  } else if ($setup.activeTab === 'roster') {
    _push(`<div data-v-db0d8864>`);
    _push(ssrRenderComponent($setup["TeamRosterStats"], { "team-id": $props.teamId }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/management/TeamDetails.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : undefined
};
const TeamDetails = /*#__PURE__*/_export_sfc(_sfc_main$d, [['ssrRender',_sfc_ssrRender$d],['__scopeId',"data-v-db0d8864"]]);

const _sfc_main$c = {
  __name: 'TeamManagement',
  setup(__props, { expose: __expose }) {
  __expose();

const { fetchApi } = useApi();
const teamsStore = useTeamsStore();
const teamStatsModalStore = useTeamStatsModalStore();

const showForm = ref(false);
const currentEditingTeam = ref(null);
const showDeleteConfirm = ref(false);
const teamToDelete = ref(null);
const deleteConfirmationInput = ref('');

const fetchTeams = async () => {
  teamsStore.setLoading(true);
  teamsStore.setError(null);
  try {
    const response = await fetchApi('teams');
    teamsStore.setTeams(response.data);
  } catch (e) {
    teamsStore.setError(e.message);
  } finally {
    teamsStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingTeam.value = null;
  showForm.value = true;
};

const openEditModal = (team) => {
  currentEditingTeam.value = { ...team };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingTeam.value = null;
};

const handleTeamFormSubmit = async (formData) => {
  teamsStore.setLoading(true);
  teamsStore.setError(null);
  try {
    if (currentEditingTeam.value) {
      // Update existing team
      await fetchApi(`teams/${currentEditingTeam.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      // Create new team
      await fetchApi('teams', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchTeams(); // Refresh the list
    closeModal();
  } catch (e) {
    teamsStore.setError(e.message);
  } finally {
    teamsStore.setLoading(false);
  }
};

const confirmDeleteTeam = (team) => {
  teamToDelete.value = team;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = ''; // Clear input on open
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  teamToDelete.value = null;
  deleteConfirmationInput.value = ''; // Clear input on close
};

const executeDelete = async () => {
  if (!teamToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    return;
  }

  teamsStore.setLoading(true);
  teamsStore.setError(null);
  try {
    await fetchApi(`teams/${teamToDelete.value.id}`, { method: 'DELETE' });
    await fetchTeams(); // Refresh the list
    cancelDelete();
  } catch (e) {
    teamsStore.setError(e.message);
  } finally {
    teamsStore.setLoading(false);
  }
};

onMounted(fetchTeams);

const __returned__ = { fetchApi, teamsStore, teamStatsModalStore, showForm, currentEditingTeam, showDeleteConfirm, teamToDelete, deleteConfirmationInput, fetchTeams, openCreateModal, openEditModal, closeModal, handleTeamFormSubmit, confirmDeleteTeam, cancelDelete, executeDelete, ref, onMounted, get useApi() { return useApi }, get useTeamsStore() { return useTeamsStore }, get useTeamStatsModalStore() { return useTeamStatsModalStore }, Modal, TeamForm, TeamDetails };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="space-y-6"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-gray-900">Gestion des Équipes</h1><p class="text-gray-600">Gérer les équipes et leurs compositions</p></div><button class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg><span>Nouvelle Équipe</span></button></div>`);
  if ($setup.teamsStore.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des équipes...</p></div>`);
  } else if ($setup.teamsStore.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.teamsStore.error)}</p></div>`);
  } else {
    _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
    ssrRenderList($setup.teamsStore.teams, (team) => {
      _push(`<div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 block cursor-pointer"><div class="flex items-center justify-between mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg><div class="flex space-x-2"><button class="p-1 text-blue-600 hover:bg-blue-50 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></button><button class="p-1 text-red-600 hover:bg-red-50 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button></div></div><h3 class="text-lg font-semibold text-gray-900 mb-2">${
        ssrInterpolate(team.name)
      }</h3><div class="space-y-2 text-sm text-gray-600"><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><span>${
        ssrInterpolate(team.users_count)
      } joueurs</span></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span>Coach: ${
        ssrInterpolate(team.coach ? team.coach.firstname + ' ' + team.coach.lastname : 'N/A')
      }</span></div>`);
      if (team.users && team.users.length > 0) {
        _push(`<div class="mt-2"><h4 class="font-semibold text-gray-700">Joueurs:</h4><ul class="list-disc list-inside ml-4"><!--[-->`);
        ssrRenderList(team.users, (player) => {
          _push(`<li class="text-gray-600">${
            ssrInterpolate(player.firstname)
          } ${
            ssrInterpolate(player.lastname)
          }</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    });
    _push(`<!--]--></div>`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.showForm,
    title: $setup.currentEditingTeam ? 'Modifier une Équipe' : 'Créer une nouvelle Équipe',
    onClose: $setup.closeModal
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent($setup["TeamForm"], {
          initialData: $setup.currentEditingTeam,
          onSubmit: $setup.handleTeamFormSubmit
        }, null, _parent, _scopeId));
      } else {
        return [
          createVNode($setup["TeamForm"], {
            initialData: $setup.currentEditingTeam,
            onSubmit: $setup.handleTeamFormSubmit
          }, null, 8, ["initialData"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.showDeleteConfirm,
    title: "Confirmer la suppression",
    onClose: $setup.cancelDelete
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="mb-4"${
          _scopeId
        }>Êtes-vous sûr de vouloir supprimer l&#39;équipe <strong${
          _scopeId
        }>${
          ssrInterpolate($setup.teamToDelete ? $setup.teamToDelete.name : '')
        }</strong> ? Cette action est irréversible.</p><p class="mb-2"${
          _scopeId
        }>Pour confirmer, veuillez taper &quot;supprimer&quot; dans le champ ci-dessous :</p><input type="text"${
          ssrRenderAttr("value", $setup.deleteConfirmationInput)
        } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"${
          _scopeId
        }>`);
      } else {
        return [
          createVNode("p", { class: "mb-4" }, [
            createTextVNode("Êtes-vous sûr de vouloir supprimer l'équipe "),
            createVNode("strong", null, toDisplayString($setup.teamToDelete ? $setup.teamToDelete.name : ''), 1),
            createTextVNode(" ? Cette action est irréversible.")
          ]),
          createVNode("p", { class: "mb-2" }, "Pour confirmer, veuillez taper \"supprimer\" dans le champ ci-dessous :"),
          withDirectives(createVNode("input", {
            type: "text",
            "onUpdate:modelValue": $event => (($setup.deleteConfirmationInput) = $event),
            class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          }, null, 8, ["onUpdate:modelValue"]), [
            [vModelText, $setup.deleteConfirmationInput]
          ])
        ]
      }
    }),
    footer: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2"${
          _scopeId
        }>Annuler</button><button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"${
          (ssrIncludeBooleanAttr($setup.deleteConfirmationInput !== 'supprimer')) ? " disabled" : ""
        }${
          _scopeId
        }>Supprimer</button>`);
      } else {
        return [
          createVNode("button", {
            class: "px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2",
            onClick: $setup.cancelDelete
          }, "Annuler"),
          createVNode("button", {
            class: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
            disabled: $setup.deleteConfirmationInput !== 'supprimer',
            onClick: $setup.executeDelete
          }, "Supprimer", 8, ["disabled"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.teamStatsModalStore.isOpen,
    title: "Détails de l'Équipe",
    onClose: $setup.teamStatsModalStore.closeModal,
    maxWidth: "max-w-4xl"
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        if ($setup.teamStatsModalStore.teamId) {
          _push(ssrRenderComponent($setup["TeamDetails"], {
            key: $setup.teamStatsModalStore.teamId,
            "team-id": $setup.teamStatsModalStore.teamId
          }, null, _parent, _scopeId));
        } else {
          _push(`<!---->`);
        }
      } else {
        return [
          ($setup.teamStatsModalStore.teamId)
            ? (openBlock(), createBlock($setup["TeamDetails"], {
                key: $setup.teamStatsModalStore.teamId,
                "team-id": $setup.teamStatsModalStore.teamId
              }, null, 8, ["team-id"]))
            : createCommentVNode("", true)
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/management/TeamManagement.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : undefined
};
const TeamManagement = /*#__PURE__*/_export_sfc(_sfc_main$c, [['ssrRender',_sfc_ssrRender$c]]);

const useMatchesStore = defineStore("matches", () => {
  const matches = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const setMatches = (newMatches) => {
    matches.value = newMatches;
  };
  const setLoading = (status) => {
    isLoading.value = status;
  };
  const setError = (err) => {
    error.value = err;
  };
  return { matches, isLoading, error, setMatches, setLoading, setError };
});

const _sfc_main$b = {
  __name: 'MatchForm',
  props: {
  initialData: {
    type: Object,
    default: null
  }
},
  emits: ['submit', 'cancel'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;
const { fetchApi } = useApi();

const seasons = ref([]);
const teams = ref([]);
const validationSchema = toTypedSchema(matchSchema);

const happensAtDate = ref('');
const happensAtTime = ref('');

const fetchDependencies = async () => {
  try {
    const [seasonsRes, teamsRes] = await Promise.all([
      fetchApi('seasons'),
      fetchApi('teams'),
    ]);
    seasons.value = seasonsRes.data;
    teams.value = teamsRes.data;
  } catch (e) {
    console.error("Error fetching form dependencies:", e);
  }
};

onMounted(fetchDependencies);

const initialValues = computed(() => {
  if (props.initialData) {
    // Initialize date/time refs
    if (props.initialData.happens_at) {
      const dateObj = new Date(props.initialData.happens_at);
      happensAtDate.value = dateObj.toISOString().split('T')[0];
      happensAtTime.value = dateObj.toTimeString().split(' ')[0].substring(0, 5);
    }
    
    return {
      ...props.initialData,
      season_id: props.initialData.season_id,
      team_id: props.initialData.team_id,
      is_at_home: !!props.initialData.is_at_home, // Ensure boolean
    };
  }
  
  // Default values
  const activeSeason = seasons.value.find(s => s.is_active);
  happensAtDate.value = '';
  happensAtTime.value = '';
  
  return {
    season_id: activeSeason ? activeSeason.id : '',
    team_id: '',
    opponent: '',
    is_at_home: false,
    happens_at: '',
    is_victory: null,
  };
});

const updateHappensAt = (setFieldValue) => {
  if (happensAtDate.value && happensAtTime.value) {
    setFieldValue('happens_at', `${happensAtDate.value} ${happensAtTime.value}:00`);
  } else {
    setFieldValue('happens_at', '');
  }
};

// Watch for initialData changes to update local refs if needed (e.g. switching from create to edit)
watch(() => props.initialData, (newVal) => {
  if (newVal && newVal.happens_at) {
    const dateObj = new Date(newVal.happens_at);
    happensAtDate.value = dateObj.toISOString().split('T')[0];
    happensAtTime.value = dateObj.toTimeString().split(' ')[0].substring(0, 5);
  } else if (!newVal) {
    happensAtDate.value = '';
    happensAtTime.value = '';
  }
}, { immediate: true });

const onSubmit = (values) => {
  emit('submit', values);
};

const __returned__ = { props, emit, fetchApi, seasons, teams, validationSchema, happensAtDate, happensAtTime, fetchDependencies, initialValues, updateHappensAt, onSubmit, ref, onMounted, computed, watch, get useApi() { return useApi }, get Form() { return Form }, get Field() { return Field }, get ErrorMessage() { return ErrorMessage }, get toTypedSchema() { return toTypedSchema }, get matchSchema() { return matchSchema } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["Form"], mergeProps({
    onSubmit: $setup.onSubmit,
    "validation-schema": $setup.validationSchema,
    "initial-values": $setup.initialValues,
    class: "space-y-4"
  }, _attrs), {
    default: withCtx(({ setFieldValue }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div${
          _scopeId
        }><label for="season_id" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Saison</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "season_id",
          as: "select",
          id: "season_id",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<option value=""${_scopeId}>Sélectionner une saison</option><!--[-->`);
              ssrRenderList($setup.seasons, (season) => {
                _push(`<option${
                  ssrRenderAttr("value", season.id)
                }${
                  _scopeId
                }>${
                  ssrInterpolate(season.name)
                }</option>`);
              });
              _push(`<!--]-->`);
            } else {
              return [
                createVNode("option", { value: "" }, "Sélectionner une saison"),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.seasons, (season) => {
                  return (openBlock(), createBlock("option", {
                    key: season.id,
                    value: season.id
                  }, toDisplayString(season.name), 9, ["value"]))
                }), 128))
              ]
            }
          }),
          _: 2
        }, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "season_id",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div${
          _scopeId
        }><label for="team_id" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Équipe (CCSLR)</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "team_id",
          as: "select",
          id: "team_id",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<option value=""${_scopeId}>Sélectionner une équipe</option><!--[-->`);
              ssrRenderList($setup.teams, (team) => {
                _push(`<option${
                  ssrRenderAttr("value", team.id)
                }${
                  _scopeId
                }>${
                  ssrInterpolate(team.name)
                }</option>`);
              });
              _push(`<!--]-->`);
            } else {
              return [
                createVNode("option", { value: "" }, "Sélectionner une équipe"),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.teams, (team) => {
                  return (openBlock(), createBlock("option", {
                    key: team.id,
                    value: team.id
                  }, toDisplayString(team.name), 9, ["value"]))
                }), 128))
              ]
            }
          }),
          _: 2
        }, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "team_id",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div${
          _scopeId
        }><label for="opponent" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Adversaire</label>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "opponent",
          type: "text",
          id: "opponent",
          class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "opponent",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`</div><div class="flex items-center"${_scopeId}>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "is_at_home",
          type: "checkbox",
          value: true,
          id: "is_at_home",
          class: "h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
        }, null, _parent, _scopeId));
        _push(`<label for="is_at_home" class="ml-2 block text-sm text-gray-900"${_scopeId}>Match à domicile</label></div>`);
        _push(ssrRenderComponent($setup["Field"], {
          name: "happens_at",
          type: "hidden"
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ErrorMessage"], {
          name: "happens_at",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent, _scopeId));
        _push(`<div${
          _scopeId
        }><label for="happens_at_date" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Date du match</label><input type="date" id="happens_at_date"${
          ssrRenderAttr("value", $setup.happensAtDate)
        } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required${
          _scopeId
        }></div><div${
          _scopeId
        }><label for="happens_at_time" class="block text-sm font-medium text-gray-700"${
          _scopeId
        }>Heure du match</label><input type="time" id="happens_at_time"${
          ssrRenderAttr("value", $setup.happensAtTime)
        } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required${
          _scopeId
        }></div>`);
        if ($props.initialData) {
          _push(`<div${
            _scopeId
          }><label for="is_victory" class="block text-sm font-medium text-gray-700"${
            _scopeId
          }>Résultat</label>`);
          _push(ssrRenderComponent($setup["Field"], {
            name: "is_victory",
            as: "select",
            id: "is_victory",
            class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          }, {
            default: withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<option${
                  ssrRenderAttr("value", null)
                }${
                  _scopeId
                }>Non renseigné</option><option${
                  ssrRenderAttr("value", true)
                }${
                  _scopeId
                }>Victoire</option><option${
                  ssrRenderAttr("value", false)
                }${
                  _scopeId
                }>Défaite</option>`);
              } else {
                return [
                  createVNode("option", { value: null }, "Non renseigné"),
                  createVNode("option", { value: true }, "Victoire"),
                  createVNode("option", { value: false }, "Défaite")
                ]
              }
            }),
            _: 2
          }, _parent, _scopeId));
          _push(ssrRenderComponent($setup["ErrorMessage"], {
            name: "is_victory",
            class: "text-red-500 text-xs mt-1"
          }, null, _parent, _scopeId));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-end space-x-3 mt-6"${
          _scopeId
        }><button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"${
          _scopeId
        }>${
          ssrInterpolate($props.initialData ? 'Modifier' : 'Créer')
        }</button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("label", {
              for: "season_id",
              class: "block text-sm font-medium text-gray-700"
            }, "Saison"),
            createVNode($setup["Field"], {
              name: "season_id",
              as: "select",
              id: "season_id",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }, {
              default: withCtx(() => [
                createVNode("option", { value: "" }, "Sélectionner une saison"),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.seasons, (season) => {
                  return (openBlock(), createBlock("option", {
                    key: season.id,
                    value: season.id
                  }, toDisplayString(season.name), 9, ["value"]))
                }), 128))
              ]),
              _: 1
            }),
            createVNode($setup["ErrorMessage"], {
              name: "season_id",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "team_id",
              class: "block text-sm font-medium text-gray-700"
            }, "Équipe (CCSLR)"),
            createVNode($setup["Field"], {
              name: "team_id",
              as: "select",
              id: "team_id",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }, {
              default: withCtx(() => [
                createVNode("option", { value: "" }, "Sélectionner une équipe"),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.teams, (team) => {
                  return (openBlock(), createBlock("option", {
                    key: team.id,
                    value: team.id
                  }, toDisplayString(team.name), 9, ["value"]))
                }), 128))
              ]),
              _: 1
            }),
            createVNode($setup["ErrorMessage"], {
              name: "team_id",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "opponent",
              class: "block text-sm font-medium text-gray-700"
            }, "Adversaire"),
            createVNode($setup["Field"], {
              name: "opponent",
              type: "text",
              id: "opponent",
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            }),
            createVNode($setup["ErrorMessage"], {
              name: "opponent",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", { class: "flex items-center" }, [
            createVNode($setup["Field"], {
              name: "is_at_home",
              type: "checkbox",
              value: true,
              id: "is_at_home",
              class: "h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            }),
            createVNode("label", {
              for: "is_at_home",
              class: "ml-2 block text-sm text-gray-900"
            }, "Match à domicile")
          ]),
          createVNode($setup["Field"], {
            name: "happens_at",
            type: "hidden"
          }),
          createVNode($setup["ErrorMessage"], {
            name: "happens_at",
            class: "text-red-500 text-xs mt-1"
          }),
          createVNode("div", null, [
            createVNode("label", {
              for: "happens_at_date",
              class: "block text-sm font-medium text-gray-700"
            }, "Date du match"),
            withDirectives(createVNode("input", {
              type: "date",
              id: "happens_at_date",
              "onUpdate:modelValue": $event => (($setup.happensAtDate) = $event),
              onInput: $event => ($setup.updateHappensAt(setFieldValue)),
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500",
              required: ""
            }, null, 40, ["onUpdate:modelValue", "onInput"]), [
              [vModelText, $setup.happensAtDate]
            ])
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "happens_at_time",
              class: "block text-sm font-medium text-gray-700"
            }, "Heure du match"),
            withDirectives(createVNode("input", {
              type: "time",
              id: "happens_at_time",
              "onUpdate:modelValue": $event => (($setup.happensAtTime) = $event),
              onInput: $event => ($setup.updateHappensAt(setFieldValue)),
              class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500",
              required: ""
            }, null, 40, ["onUpdate:modelValue", "onInput"]), [
              [vModelText, $setup.happensAtTime]
            ])
          ]),
          ($props.initialData)
            ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("label", {
                  for: "is_victory",
                  class: "block text-sm font-medium text-gray-700"
                }, "Résultat"),
                createVNode($setup["Field"], {
                  name: "is_victory",
                  as: "select",
                  id: "is_victory",
                  class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                }, {
                  default: withCtx(() => [
                    createVNode("option", { value: null }, "Non renseigné"),
                    createVNode("option", { value: true }, "Victoire"),
                    createVNode("option", { value: false }, "Défaite")
                  ]),
                  _: 1
                }),
                createVNode($setup["ErrorMessage"], {
                  name: "is_victory",
                  class: "text-red-500 text-xs mt-1"
                })
              ]))
            : createCommentVNode("", true),
          createVNode("div", { class: "flex justify-end space-x-3 mt-6" }, [
            createVNode("button", {
              type: "submit",
              class: "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            }, toDisplayString($props.initialData ? 'Modifier' : 'Créer'), 1)
          ])
        ]
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/forms/MatchForm.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : undefined
};
const MatchForm = /*#__PURE__*/_export_sfc(_sfc_main$b, [['ssrRender',_sfc_ssrRender$b]]);

const _sfc_main$a = {
  __name: 'MatchResultForm',
  props: {
  initialData: {
    type: Object,
    default: null
  }
},
  emits: ['submit', 'cancel'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;

const defaultFormData = {
  team_score: null,
  opponent_score: null,
  is_victory: null,
};

const formData = ref({ ...defaultFormData });

const hasScores = computed(() => {
  return formData.value.team_score !== null && formData.value.opponent_score !== null;
});

watch(() => props.initialData, (newVal) => {
  if (newVal) {
    formData.value = {
      ...defaultFormData,
      team_score: newVal.team_score,
      opponent_score: newVal.opponent_score,
      is_victory: newVal.is_victory
    };
  } else {
    formData.value = { ...defaultFormData };
  }
}, { immediate: true });

watch([() => formData.value.team_score, () => formData.value.opponent_score], ([newTeamScore, newOpponentScore]) => {
  if (newTeamScore !== null && newOpponentScore !== null) {
    if (newTeamScore > newOpponentScore) {
      formData.value.is_victory = true;
    } else if (newTeamScore < newOpponentScore) {
      formData.value.is_victory = false;
    } else {
      formData.value.is_victory = null; // Draw or not determined
    }
  } else {
    formData.value.is_victory = null;
  }
});

const handleSubmit = () => {
  emit('submit', formData.value);
};

const __returned__ = { props, emit, defaultFormData, formData, hasScores, handleSubmit, ref, watch, computed };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${
    ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))
  }><div><label for="team_score" class="block text-sm font-medium text-gray-700">Score de l&#39;équipe</label><input type="number" id="team_score"${
    ssrRenderAttr("value", $setup.formData.team_score)
  } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></div><div><label for="opponent_score" class="block text-sm font-medium text-gray-700">Score de l&#39;adversaire</label><input type="number" id="opponent_score"${
    ssrRenderAttr("value", $setup.formData.opponent_score)
  } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></div><div><label for="is_victory" class="block text-sm font-medium text-gray-700">Résultat</label><select id="is_victory" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"${
    (ssrIncludeBooleanAttr($setup.hasScores)) ? " disabled" : ""
  }><option${
    ssrRenderAttr("value", null)
  }${
    (ssrIncludeBooleanAttr((Array.isArray($setup.formData.is_victory))
      ? ssrLooseContain($setup.formData.is_victory, null)
      : ssrLooseEqual($setup.formData.is_victory, null))) ? " selected" : ""
  }>Non renseigné</option><option${
    ssrRenderAttr("value", true)
  }${
    (ssrIncludeBooleanAttr((Array.isArray($setup.formData.is_victory))
      ? ssrLooseContain($setup.formData.is_victory, true)
      : ssrLooseEqual($setup.formData.is_victory, true))) ? " selected" : ""
  }>Victoire</option><option${
    ssrRenderAttr("value", false)
  }${
    (ssrIncludeBooleanAttr((Array.isArray($setup.formData.is_victory))
      ? ssrLooseContain($setup.formData.is_victory, false)
      : ssrLooseEqual($setup.formData.is_victory, false))) ? " selected" : ""
  }>Défaite</option></select></div><div class="flex justify-end space-x-3 mt-6"><button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Enregistrer le résultat</button></div></form>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/MatchResultForm.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : undefined
};
const MatchResultForm = /*#__PURE__*/_export_sfc(_sfc_main$a, [['ssrRender',_sfc_ssrRender$a]]);

const _sfc_main$9 = {
  __name: 'MatchRecapImporter',
  props: {
  match: {
    type: Object,
    required: true
  }
},
  emits: ['import-success'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;
const { fetchApi } = useApi();

const selectedFile = ref(null);
const isLoading = ref(false);
const error = ref(null);

const recapData = ref(null);
const matchedPlayers = ref([]);
const unmatchedPlayers = ref([]);
const officialPlayers = ref([]);
const playerMappings = ref({}); // { json_player_id: db_user_id }

const handleFileChange = (event) => {
  selectedFile.value = event.target.files[0];
  error.value = null;
  console.log('Selected file:', selectedFile.value); // Debug log
};

const prepareImport = async () => {
  if (!selectedFile.value) {
    error.value = "Veuillez sélectionner un fichier JSON.";
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    const formData = new FormData();
    formData.append('recapFile', selectedFile.value);

    console.log('Sending FormData:', formData); // Debug log
    console.log('API Endpoint:', `matches/${props.match.id}/recap/prepare`); // Debug log

    const response = await fetchApi(`matches/${props.match.id}/recap/prepare`, {
      method: 'POST',
      body: formData,
    });

    console.log('API Response for prepare:', response); // Debug log

    recapData.value = response.recap_data;
    matchedPlayers.value = response.matched;
    unmatchedPlayers.value = response.unmatched;
    officialPlayers.value = response.official_players;

    // Initialize playerMappings for unmatched players
    playerMappings.value = {};
    unmatchedPlayers.value.forEach(player => {
      playerMappings.value[player.id] = ''; // Default to no mapping
    });

  } catch (e) {
    error.value = e.message;
    recapData.value = null;
    console.error('Error during prepareImport:', e); // Debug log
  } finally {
    isLoading.value = false;
  }
};

const importData = async () => {
  isLoading.value = true;
  error.value = null;

  if (!selectedFile.value) {
    error.value = "Le fichier de récapitulatif original n'a pas été trouvé.";
    isLoading.value = false;
    return;
  }

  try {
    // Create mappings for players that were manually selected in the UI
    const manualMappings = Object.keys(playerMappings.value)
      .filter(jsonId => playerMappings.value[jsonId] !== '')
      .map(jsonId => ({
        json_player_id: jsonId,
        db_user_id: playerMappings.value[jsonId]
      }));

    // Create mappings for players that were automatically matched by the backend.
    const automaticMappings = matchedPlayers.value.map(matchedPlayer => {
      // Find the full player details from the official list using the license number.
      const officialPlayer = officialPlayers.value.find(op => op.licence_number === matchedPlayer.id);
      
      // The `officialPlayer` object contains the database user ID under the `id` property.
      return {
        json_player_id: matchedPlayer.id,
        db_user_id: officialPlayer ? officialPlayer.id : null
      };
    }).filter(mapping => mapping.db_user_id != null); // Ensure we don't send null IDs

    // Combine both sets of mappings to create a complete list for the backend.
    const finalMappings = [...automaticMappings, ...manualMappings];

    const fileContent = await selectedFile.value.text();
    const recapDataObject = JSON.parse(fileContent);

    await fetchApi(`matches/${props.match.id}/recap/import`, {
      method: 'POST',
      body: JSON.stringify({
        recapData: recapDataObject,
        mappings: finalMappings
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    emit('import-success');
  } catch (e) {
    error.value = e.message;
    console.error('Error during importData:', e);
  } finally {
    isLoading.value = false;
  }
};

const resetImporter = () => {
  selectedFile.value = null;
  recapData.value = null;
  matchedPlayers.value = [];
  unmatchedPlayers.value = [];
  officialPlayers.value = [];
  playerMappings.value = {};
  error.value = null;
  isLoading.value = false;
};

const __returned__ = { props, emit, fetchApi, selectedFile, isLoading, error, recapData, matchedPlayers, unmatchedPlayers, officialPlayers, playerMappings, handleFileChange, prepareImport, importData, resetImporter, ref, get useApi() { return useApi } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}>`);
  if ($setup.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.error)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$setup.recapData) {
    _push(`<div><label for="recapFile" class="block text-sm font-medium text-gray-700 mb-2">Fichier de récapitulatif de match (JSON)</label><input type="file" id="recapFile" accept=".json" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"><button${(ssrIncludeBooleanAttr(!$setup.selectedFile || $setup.isLoading)) ? " disabled" : ""} class="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed">`);
    if ($setup.isLoading) {
      _push(`<span>Préparation...</span>`);
    } else {
      _push(`<span>Préparer l&#39;import</span>`);
    }
    _push(`</button></div>`);
  } else {
    _push(`<div><h3 class="text-lg font-semibold text-gray-800 mb-2">Récapitulatif du Match</h3><p class="text-sm text-gray-600 mb-4">Vérifiez les joueurs et associez les licenciés non reconnus.</p><div class="bg-gray-50 p-4 rounded-lg mb-4"><p><strong>Match ID:</strong> ${
      ssrInterpolate($setup.recapData.matchId)
    }</p><p><strong>Équipe:</strong> ${
      ssrInterpolate($setup.recapData.teamName)
    }</p><p><strong>Adversaire:</strong> ${
      ssrInterpolate($setup.recapData.opponentName)
    }</p><p><strong>Score:</strong> ${
      ssrInterpolate($setup.recapData.score.team)
    } - ${
      ssrInterpolate($setup.recapData.score.opponent)
    }</p></div><h4 class="font-medium text-gray-700 mb-2">Joueurs du fichier JSON:</h4><ul class="space-y-2 mb-4"><!--[-->`);
    ssrRenderList($setup.recapData.players, (player) => {
      _push(`<li class="flex items-center justify-between bg-white p-3 rounded-md shadow-sm border border-gray-200"><span>${
        ssrInterpolate(player.firstname)
      } ${
        ssrInterpolate(player.lastname)
      } (Licence: ${
        ssrInterpolate(player.id)
      })</span>`);
      if ($setup.matchedPlayers.some(mp => mp.id === player.id)) {
        _push(`<span class="text-green-600 text-sm">Associé</span>`);
      } else {
        _push(`<span class="text-red-600 text-sm">Non associé</span>`);
      }
      _push(`</li>`);
    });
    _push(`<!--]--></ul><h4 class="font-medium text-gray-700 mb-2">Joueurs non associés:</h4>`);
    if ($setup.unmatchedPlayers.length > 0) {
      _push(`<div class="space-y-3 mb-4"><!--[-->`);
      ssrRenderList($setup.unmatchedPlayers, (player, index) => {
        _push(`<div class="bg-yellow-50 p-3 rounded-md border border-yellow-200"><p class="font-medium text-yellow-800">${
          ssrInterpolate(player.firstname)
        } ${
          ssrInterpolate(player.lastname)
        } (Licence: ${
          ssrInterpolate(player.id)
        })</p><div class="mt-2"><label${
          ssrRenderAttr("for", `map-player-${index}`)
        } class="block text-xs font-medium text-yellow-700 mb-1">Associer à un licencié existant:</label><select${
          ssrRenderAttr("id", `map-player-${index}`)
        } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"><option value=""${
          (ssrIncludeBooleanAttr((Array.isArray($setup.playerMappings[player.id]))
            ? ssrLooseContain($setup.playerMappings[player.id], "")
            : ssrLooseEqual($setup.playerMappings[player.id], ""))) ? " selected" : ""
        }>Ne pas associer</option><!--[-->`);
        ssrRenderList($setup.officialPlayers, (officialPlayer) => {
          _push(`<option${
            ssrRenderAttr("value", officialPlayer.id)
          }${
            (ssrIncludeBooleanAttr((Array.isArray($setup.playerMappings[player.id]))
              ? ssrLooseContain($setup.playerMappings[player.id], officialPlayer.id)
              : ssrLooseEqual($setup.playerMappings[player.id], officialPlayer.id))) ? " selected" : ""
          }>${
            ssrInterpolate(officialPlayer.firstname)
          } ${
            ssrInterpolate(officialPlayer.lastname)
          } (${
            ssrInterpolate(officialPlayer.licence_number)
          }) </option>`);
        });
        _push(`<!--]--></select></div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<p class="text-gray-600">Tous les joueurs ont été associés ou il n&#39;y a pas de joueurs non associés.</p>`);
    }
    _push(`<button${(ssrIncludeBooleanAttr($setup.isLoading)) ? " disabled" : ""} class="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed">`);
    if ($setup.isLoading) {
      _push(`<span>Importation...</span>`);
    } else {
      _push(`<span>Importer les données</span>`);
    }
    _push(`</button><button${(ssrIncludeBooleanAttr($setup.isLoading)) ? " disabled" : ""} class="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:bg-gray-400 disabled:cursor-not-allowed"> Annuler </button></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/MatchRecapImporter.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : undefined
};
const MatchRecapImporter = /*#__PURE__*/_export_sfc(_sfc_main$9, [['ssrRender',_sfc_ssrRender$9]]);

const _sfc_main$8 = {
  __name: 'MatchResultModal',
  props: {
  show: {
    type: Boolean,
    default: false
  },
  match: {
    type: Object,
    required: false,
    default: null
  }
},
  emits: ['close'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;
const { fetchApi } = useApi();

const activeTab = ref('manual'); // 'manual' or 'json-import'

const modalTitle = computed(() => {
  if (!props.match) return 'Résultats du Match';
  return `Résultats du Match: ${props.match.home_team.name} vs ${props.match.away_team.name}`;
});

const handleManualSubmit = async (formData) => {
  try {
    await fetchApi(`encounters/${props.match.id}`, {
      method: 'PUT',
      body: JSON.stringify(formData)
    });
    emit('close'); // Close modal and trigger refresh in parent
  } catch (e) {
    console.error("Error updating match result manually:", e);
    // TODO: Display error to user
  }
};

const handleImportSuccess = () => {
  emit('close'); // Close modal and trigger refresh in parent
};

const __returned__ = { props, emit, fetchApi, activeTab, modalTitle, handleManualSubmit, handleImportSuccess, ref, computed, Modal, MatchResultForm, MatchRecapImporter, get useApi() { return useApi } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["Modal"], mergeProps({
    show: $props.show,
    title: $setup.modalTitle,
    onClose: $event => (_ctx.$emit('close'))
  }, _attrs), {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex border-b border-gray-200 mb-4"${
          _scopeId
        }><button class="${
          ssrRenderClass(['px-4 py-2 text-sm font-medium', $setup.activeTab === 'manual' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'])
        }"${
          _scopeId
        }> Saisie Manuelle </button><button class="${
          ssrRenderClass(['px-4 py-2 text-sm font-medium', $setup.activeTab === 'json-import' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'])
        }"${
          _scopeId
        }> Import JSON </button></div>`);
        if ($setup.activeTab === 'manual') {
          _push(`<div${_scopeId}>`);
          _push(ssrRenderComponent($setup["MatchResultForm"], {
            initialData: $props.match,
            onSubmit: $setup.handleManualSubmit
          }, null, _parent, _scopeId));
          _push(`</div>`);
        } else if ($setup.activeTab === 'json-import') {
          _push(`<div${_scopeId}>`);
          _push(ssrRenderComponent($setup["MatchRecapImporter"], {
            match: $props.match,
            onImportSuccess: $setup.handleImportSuccess
          }, null, _parent, _scopeId));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
      } else {
        return [
          createVNode("div", { class: "flex border-b border-gray-200 mb-4" }, [
            createVNode("button", {
              onClick: $event => ($setup.activeTab = 'manual'),
              class: ['px-4 py-2 text-sm font-medium', $setup.activeTab === 'manual' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700']
            }, " Saisie Manuelle ", 10, ["onClick"]),
            createVNode("button", {
              onClick: $event => ($setup.activeTab = 'json-import'),
              class: ['px-4 py-2 text-sm font-medium', $setup.activeTab === 'json-import' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700']
            }, " Import JSON ", 10, ["onClick"])
          ]),
          ($setup.activeTab === 'manual')
            ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode($setup["MatchResultForm"], {
                  initialData: $props.match,
                  onSubmit: $setup.handleManualSubmit
                }, null, 8, ["initialData"])
              ]))
            : ($setup.activeTab === 'json-import')
              ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode($setup["MatchRecapImporter"], {
                    match: $props.match,
                    onImportSuccess: $setup.handleImportSuccess
                  }, null, 8, ["match"])
                ]))
              : createCommentVNode("", true)
        ]
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/MatchResultModal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : undefined
};
const MatchResultModal = /*#__PURE__*/_export_sfc(_sfc_main$8, [['ssrRender',_sfc_ssrRender$8]]);

const _sfc_main$7 = {
  __name: 'MatchManagement',
  setup(__props, { expose: __expose }) {
  __expose();

const { fetchApi } = useApi();
const matchesStore = useMatchesStore();

const showForm = ref(false);
const currentEditingMatch = ref(null);
const showDeleteConfirm = ref(false);
const matchToDelete = ref(null);
const deleteConfirmationInput = ref('');

const showResultModal = ref(false);
const selectedMatch = ref(null);

const selectedMonthKey = ref(null);
const collapsedWeekends = ref(new Set());

// Helper to get the Friday of the week for a given date
const getFridayOfWeek = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 5); // Adjust when day is Sunday
  const friday = new Date(d.setDate(diff));
  friday.setHours(0, 0, 0, 0);
  return friday;
};

const availableMonths = computed(() => {
  if (!matchesStore.matches) return [];
  
  const months = new Set();
  matchesStore.matches.forEach(match => {
    const d = new Date(match.happens_at);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    const label = d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    // We store a stringified object to ensure uniqueness by key but keep label
    months.add(JSON.stringify({ key, label }));
  });

  return Array.from(months)
    .map(m => JSON.parse(m))
    .sort((a, b) => {
      const [yearA, monthA] = a.key.split('-').map(Number);
      const [yearB, monthB] = b.key.split('-').map(Number);
      return yearA !== yearB ? yearA - yearB : monthA - monthB;
    });
});

const selectedMonthMatches = computed(() => {
  if (!selectedMonthKey.value || !matchesStore.matches) return [];
  const [year, month] = selectedMonthKey.value.split('-').map(Number);
  return matchesStore.matches.filter(match => {
    const d = new Date(match.happens_at);
    return d.getFullYear() === year && d.getMonth() === month;
  });
});

const weekendsInSelectedMonth = computed(() => {
  const groups = {};
  
  selectedMonthMatches.value.forEach(match => {
    const friday = getFridayOfWeek(match.happens_at);
    const sunday = new Date(friday);
    sunday.setDate(friday.getDate() + 2);
    
    const key = friday.toISOString();
    if (!groups[key]) {
      groups[key] = {
        label: `Week-end du ${friday.toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric' })} au ${sunday.toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric' })}`,
        matches: [],
        isCollapsed: collapsedWeekends.value.has(key)
      };
    }
    groups[key].matches.push(match);
  });

  // Sort matches within groups by date/time
  Object.values(groups).forEach(group => {
    group.matches.sort((a, b) => new Date(a.happens_at) - new Date(b.happens_at));
  });

  // Return sorted groups
  return Object.entries(groups)
    .sort(([keyA], [keyB]) => new Date(keyA) - new Date(keyB))
    .map(([key, group]) => ({ ...group, key })); // Include key for toggling
});

const toggleWeekend = (label) => {
  // We need the key to toggle correctly, but the UI uses label. 
  // Let's find the group by label or change logic to use key in template.
  // The computed property returns objects with 'key'. 
  // Let's update the template to pass the key or the whole object.
  // Actually, let's just find it in the computed list.
  const group = weekendsInSelectedMonth.value.find(g => g.label === label);
  if (group) {
    if (collapsedWeekends.value.has(group.key)) {
      collapsedWeekends.value.delete(group.key);
    } else {
      collapsedWeekends.value.add(group.key);
    }
  }
};

// Set default selected month to current month or first available
watch(availableMonths, (months) => {
  if (months.length > 0 && !selectedMonthKey.value) {
    const now = new Date();
    const currentMonthKey = `${now.getFullYear()}-${now.getMonth()}`;
    const hasCurrent = months.find(m => m.key === currentMonthKey);
    selectedMonthKey.value = hasCurrent ? currentMonthKey : months[0].key;
  }
}, { immediate: true });

const fetchMatches = async () => {
  matchesStore.setLoading(true);
  matchesStore.setError(null);
  try {
    const response = await fetchApi('encounters?filter=all');
    matchesStore.setMatches(response.data);
  } catch (e) {
    matchesStore.setError(e.message);
  } finally {
    matchesStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingMatch.value = null;
  showForm.value = true;
};

const openEditModal = (match) => {
  currentEditingMatch.value = { ...match };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingMatch.value = null;
};

const openResultModal = (match) => {
  selectedMatch.value = match;
  showResultModal.value = true;
};

const closeResultModal = () => {
  showResultModal.value = false;
  selectedMatch.value = null;
  fetchMatches();
};

const handleMatchFormSubmit = async (formData) => {
  matchesStore.setLoading(true);
  matchesStore.setError(null);
  try {
    if (currentEditingMatch.value) {
      await fetchApi(`encounters/${currentEditingMatch.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      await fetchApi('encounters', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchMatches();
    closeModal();
  } catch (e) {
    matchesStore.setError(e.message);
  } finally {
    matchesStore.setLoading(false);
  }
};

const confirmDeleteMatch = (match) => {
  matchToDelete.value = match;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = '';
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  matchToDelete.value = null;
  deleteConfirmationInput.value = '';
};

const executeDelete = async () => {
  if (!matchToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    return;
  }

  matchesStore.setLoading(true);
  matchesStore.setError(null);
  try {
    await fetchApi(`encounters/${matchToDelete.value.id}`, { method: 'DELETE' });
    await fetchMatches();
    cancelDelete();
  } catch (e) {
    matchesStore.setError(e.message);
  } finally {
    matchesStore.setLoading(false);
  }
};

onMounted(fetchMatches);

const __returned__ = { fetchApi, matchesStore, showForm, currentEditingMatch, showDeleteConfirm, matchToDelete, deleteConfirmationInput, showResultModal, selectedMatch, selectedMonthKey, collapsedWeekends, getFridayOfWeek, availableMonths, selectedMonthMatches, weekendsInSelectedMonth, toggleWeekend, fetchMatches, openCreateModal, openEditModal, closeModal, openResultModal, closeResultModal, handleMatchFormSubmit, confirmDeleteMatch, cancelDelete, executeDelete, ref, onMounted, computed, watch, get useApi() { return useApi }, get useMatchesStore() { return useMatchesStore }, Modal, MatchForm, MatchResultModal };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="space-y-6"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-gray-900">Gestion des Matchs</h1><p class="text-gray-600">Planifier les matchs et saisir les résultats</p></div><button class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg><span>Nouveau Match</span></button></div>`);
  if ($setup.matchesStore.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des matchs...</p></div>`);
  } else if ($setup.matchesStore.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.matchesStore.error)}</p></div>`);
  } else {
    _push(`<div class="space-y-6"><div class="flex overflow-x-auto pb-2 border-b border-gray-200 space-x-2"><!--[-->`);
    ssrRenderList($setup.availableMonths, (month) => {
      _push(`<button class="${
        ssrRenderClass([$setup.selectedMonthKey === month.key ? 'bg-green-50 text-green-700 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50', "px-4 py-2 whitespace-nowrap text-sm font-medium rounded-t-lg transition-colors duration-200"])
      }">${
        ssrInterpolate(month.label)
      }</button>`);
    });
    _push(`<!--]--></div>`);
    if ($setup.selectedMonthMatches.length > 0) {
      _push(`<div class="space-y-4"><!--[-->`);
      ssrRenderList($setup.weekendsInSelectedMonth, (weekend) => {
        _push(`<div class="border border-gray-200 rounded-lg overflow-hidden"><button class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"><h3 class="text-base font-semibold text-gray-900">${
          ssrInterpolate(weekend.label)
        }</h3><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${
          ssrRenderClass([{'transform rotate-180': !weekend.isCollapsed}, "text-gray-500 transition-transform duration-200"])
        }"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div class="bg-white divide-y divide-gray-100" style="${
          ssrRenderStyle((!weekend.isCollapsed) ? null : { display: "none" })
        }"><!--[-->`);
        ssrRenderList(weekend.matches, (match) => {
          _push(`<div class="p-4 hover:bg-gray-50 transition-colors duration-150"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4"><div class="flex items-center space-x-4"><div class="flex flex-col items-center w-16 text-center"><span class="text-xs font-bold text-gray-500 uppercase">${
            ssrInterpolate(new Date(match.happens_at).toLocaleDateString('fr-FR', { weekday: 'short' }))
          }</span><span class="text-lg font-bold text-gray-900">${
            ssrInterpolate(new Date(match.happens_at).getDate())
          }</span><span class="text-xs text-gray-500">${
            ssrInterpolate(new Date(match.happens_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }))
          }</span></div><div class="flex-1"><div class="flex items-center space-x-3"><span class="${
            ssrRenderClass([{'font-bold': match.is_at_home}, "font-medium text-gray-900"])
          }">${
            ssrInterpolate(match.home_team.name)
          }</span><span class="text-sm text-gray-400">vs</span><span class="${
            ssrRenderClass([{'font-bold': !match.is_at_home}, "font-medium text-gray-900"])
          }">${
            ssrInterpolate(match.away_team.name)
          }</span></div><div class="flex items-center space-x-2 mt-1">`);
          if (match.is_at_home) {
            _push(`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"> Domicile </span>`);
          } else {
            _push(`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"> Extérieur </span>`);
          }
          _push(`<span class="text-xs text-gray-500 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${ssrInterpolate(match.location || 'N/A')}</span></div></div></div><div class="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0">`);
          if (match.team_score != null) {
            _push(`<div class="text-center px-4"><div class="${
              ssrRenderClass([{
                      'text-green-700': match.is_victory,
                      'text-red-700': match.is_victory === false,
                      'text-gray-800': match.is_victory == null
                    }, "font-bold text-lg whitespace-nowrap"])
            }">${
              ssrInterpolate(match.team_score)
            } - ${
              ssrInterpolate(match.opponent_score)
            }</div>`);
            if (match.is_victory) {
              _push(`<div class="text-xs font-semibold text-green-600">VICTOIRE</div>`);
            } else if (match.is_victory === false) {
              _push(`<div class="text-xs font-semibold text-red-600">DÉFAITE</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex items-center space-x-2"><button class="flex items-center space-x-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg><span class="text-sm font-medium">Résultats</span></button><button class="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Modifier"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></button><button class="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Supprimer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button></div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<div class="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300"><p class="text-gray-500">Aucun match prévu pour ce mois.</p></div>`);
    }
    _push(`</div>`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.showForm,
    title: $setup.currentEditingMatch ? 'Modifier un Match' : 'Créer un nouveau Match',
    onClose: $setup.closeModal
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent($setup["MatchForm"], {
          initialData: $setup.currentEditingMatch,
          onSubmit: $setup.handleMatchFormSubmit
        }, null, _parent, _scopeId));
      } else {
        return [
          createVNode($setup["MatchForm"], {
            initialData: $setup.currentEditingMatch,
            onSubmit: $setup.handleMatchFormSubmit
          }, null, 8, ["initialData"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.showDeleteConfirm,
    title: "Confirmer la suppression",
    onClose: $setup.cancelDelete
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="mb-4"${
          _scopeId
        }>Êtes-vous sûr de vouloir supprimer le match <strong${
          _scopeId
        }>${
          ssrInterpolate($setup.matchToDelete ? $setup.matchToDelete.home_team.name + ' vs ' + $setup.matchToDelete.away_team.name : '')
        }</strong> ? Cette action est irréversible.</p><p class="mb-2"${
          _scopeId
        }>Pour confirmer, veuillez taper &quot;supprimer&quot; dans le champ ci-dessous :</p><input type="text"${
          ssrRenderAttr("value", $setup.deleteConfirmationInput)
        } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"${
          _scopeId
        }>`);
      } else {
        return [
          createVNode("p", { class: "mb-4" }, [
            createTextVNode("Êtes-vous sûr de vouloir supprimer le match "),
            createVNode("strong", null, toDisplayString($setup.matchToDelete ? $setup.matchToDelete.home_team.name + ' vs ' + $setup.matchToDelete.away_team.name : ''), 1),
            createTextVNode(" ? Cette action est irréversible.")
          ]),
          createVNode("p", { class: "mb-2" }, "Pour confirmer, veuillez taper \"supprimer\" dans le champ ci-dessous :"),
          withDirectives(createVNode("input", {
            type: "text",
            "onUpdate:modelValue": $event => (($setup.deleteConfirmationInput) = $event),
            class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          }, null, 8, ["onUpdate:modelValue"]), [
            [vModelText, $setup.deleteConfirmationInput]
          ])
        ]
      }
    }),
    footer: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2"${
          _scopeId
        }>Annuler</button><button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"${
          (ssrIncludeBooleanAttr($setup.deleteConfirmationInput !== 'supprimer')) ? " disabled" : ""
        }${
          _scopeId
        }>Supprimer</button>`);
      } else {
        return [
          createVNode("button", {
            class: "px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2",
            onClick: $setup.cancelDelete
          }, "Annuler"),
          createVNode("button", {
            class: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
            disabled: $setup.deleteConfirmationInput !== 'supprimer',
            onClick: $setup.executeDelete
          }, "Supprimer", 8, ["disabled"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["MatchResultModal"], {
    show: $setup.showResultModal,
    match: $setup.selectedMatch,
    onClose: $setup.closeResultModal
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/management/MatchManagement.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined
};
const MatchManagement = /*#__PURE__*/_export_sfc(_sfc_main$7, [['ssrRender',_sfc_ssrRender$7]]);

const useEventsStore = defineStore("events", () => {
  const events = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const setEvents = (newEvents) => {
    events.value = newEvents;
  };
  const setLoading = (status) => {
    isLoading.value = status;
  };
  const setError = (err) => {
    error.value = err;
  };
  return { events, isLoading, error, setEvents, setLoading, setError };
});

const _sfc_main$6 = {
  __name: 'EventManagement',
  setup(__props, { expose: __expose }) {
  __expose();

const { fetchApi } = useApi();
const eventsStore = useEventsStore();

const fetchEvents = async () => {
  eventsStore.setLoading(true);
  eventsStore.setError(null);
  try {
    const response = await fetchApi('events');
    eventsStore.setEvents(response.data);
  } catch (e) {
    eventsStore.setError(e.message);
  } finally {
    eventsStore.setLoading(false);
  }
};

onMounted(fetchEvents);

const __returned__ = { fetchApi, eventsStore, fetchEvents, ref, onMounted, get useApi() { return useApi }, get useEventsStore() { return useEventsStore } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-gray-900">Événements Publics</h1><p class="text-gray-600">Gérer les événements pour la communication</p></div><button class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg><span>Nouvel Événement</span></button></div>`);
  if ($setup.eventsStore.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des événements...</p></div>`);
  } else if ($setup.eventsStore.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.eventsStore.error)}</p></div>`);
  } else {
    _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
    ssrRenderList($setup.eventsStore.events, (event) => {
      _push(`<div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"><div class="flex items-center justify-between mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><div class="flex space-x-2"><button class="p-1 text-blue-600 hover:bg-blue-50 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></button><button class="p-1 text-red-600 hover:bg-red-50 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button></div></div><h3 class="text-lg font-semibold text-gray-900 mb-2">${
        ssrInterpolate(event.title)
      }</h3><div class="space-y-2 text-sm text-gray-600"><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>${
        ssrInterpolate(new Date(event.date).toLocaleDateString('fr-FR'))
      }</span></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg><span>${
        ssrInterpolate(event.time)
      }</span></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>${
        ssrInterpolate(event.location)
      }</span></div></div></div>`);
    });
    _push(`<!--]--></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/management/EventManagement.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined
};
const EventManagement = /*#__PURE__*/_export_sfc(_sfc_main$6, [['ssrRender',_sfc_ssrRender$6]]);

const useCategoriesStore = defineStore("categories", () => {
  const categories = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const { fetchApi } = useApi();
  const setLoading = (value) => {
    isLoading.value = value;
  };
  const setError = (value) => {
    error.value = value;
  };
  const setCategories = (newCategories) => {
    categories.value = newCategories;
  };
  async function fetchCategories() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchApi("categories");
      setCategories(response.data);
    } catch (e) {
      setError(e.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }
  return { categories, isLoading, error, setLoading, setError, setCategories, fetchCategories };
});

const _sfc_main$5 = {
  __name: 'CategoryForm',
  props: {
  initialData: {
    type: Object,
    default: null
  }
},
  emits: ['submit', 'cancel'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;

const defaultFormData = {
  title: '',
  gender: '',
};

const formData = ref({ ...defaultFormData });

watch(() => props.initialData, (newVal) => {
  if (newVal) {
    formData.value = { ...defaultFormData, ...newVal };
  } else {
    formData.value = { ...defaultFormData };
  }
}, { immediate: true });

const handleSubmit = () => {
  emit('submit', formData.value);
};

const __returned__ = { props, emit, defaultFormData, formData, handleSubmit, ref, watch };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${
    ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))
  }><div><label for="title" class="block text-sm font-medium text-gray-700">Titre de la catégorie</label><input type="text" id="title"${
    ssrRenderAttr("value", $setup.formData.title)
  } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required></div><div><label for="gender" class="block text-sm font-medium text-gray-700">Genre</label><select id="gender" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required><option value=""${
    (ssrIncludeBooleanAttr((Array.isArray($setup.formData.gender))
      ? ssrLooseContain($setup.formData.gender, "")
      : ssrLooseEqual($setup.formData.gender, ""))) ? " selected" : ""
  }>Sélectionner un genre</option><option value="M"${
    (ssrIncludeBooleanAttr((Array.isArray($setup.formData.gender))
      ? ssrLooseContain($setup.formData.gender, "M")
      : ssrLooseEqual($setup.formData.gender, "M"))) ? " selected" : ""
  }>Masculin</option><option value="F"${
    (ssrIncludeBooleanAttr((Array.isArray($setup.formData.gender))
      ? ssrLooseContain($setup.formData.gender, "F")
      : ssrLooseEqual($setup.formData.gender, "F"))) ? " selected" : ""
  }>Féminin</option><option value="X"${
    (ssrIncludeBooleanAttr((Array.isArray($setup.formData.gender))
      ? ssrLooseContain($setup.formData.gender, "X")
      : ssrLooseEqual($setup.formData.gender, "X"))) ? " selected" : ""
  }>Mixte</option></select></div><div class="flex justify-end space-x-3 mt-6"><button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">${
    ssrInterpolate($props.initialData ? 'Modifier' : 'Créer')
  }</button></div></form>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/forms/CategoryForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined
};
const CategoryForm = /*#__PURE__*/_export_sfc(_sfc_main$5, [['ssrRender',_sfc_ssrRender$5]]);

const _sfc_main$4 = {
  __name: 'CategoryManagement',
  setup(__props, { expose: __expose }) {
  __expose();

const { fetchApi } = useApi();
const categoriesStore = useCategoriesStore();

const showForm = ref(false);
const currentEditingCategory = ref(null);
const showDeleteConfirm = ref(false);
const categoryToDelete = ref(null);
const deleteConfirmationInput = ref('');

const fetchCategories = async () => {
  categoriesStore.setLoading(true);
  categoriesStore.setError(null);
  try {
    const response = await fetchApi('categories');
    categoriesStore.setCategories(response.data);
  } catch (e) {
    categoriesStore.setError(e.message);
  } finally {
    categoriesStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingCategory.value = null;
  showForm.value = true;
};

const openEditModal = (category) => {
  currentEditingCategory.value = { ...category };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingCategory.value = null;
};

const handleCategoryFormSubmit = async (formData) => {
  categoriesStore.setLoading(true);
  categoriesStore.setError(null);
  try {
    if (currentEditingCategory.value) {
      // Update existing category
      await fetchApi(`categories/${currentEditingCategory.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      // Create new category
      await fetchApi('categories', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchCategories(); // Refresh the list
    closeModal();
  } catch (e) {
    categoriesStore.setError(e.message);
  } finally {
    categoriesStore.setLoading(false);
  }
};

const confirmDeleteCategory = (category) => {
  categoryToDelete.value = category;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = ''; // Clear input on open
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  categoryToDelete.value = null;
  deleteConfirmationInput.value = ''; // Clear input on close
};

const executeDelete = async () => {
  if (!categoryToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    return;
  }

  categoriesStore.setLoading(true);
  categoriesStore.setError(null);
  try {
    await fetchApi(`categories/${categoryToDelete.value.id}`, { method: 'DELETE' });
    await fetchCategories(); // Refresh the list
    cancelDelete();
  } catch (e) {
    categoriesStore.setError(e.message);
  } finally {
    categoriesStore.setLoading(false);
  }
};

onMounted(fetchCategories);

const __returned__ = { fetchApi, categoriesStore, showForm, currentEditingCategory, showDeleteConfirm, categoryToDelete, deleteConfirmationInput, fetchCategories, openCreateModal, openEditModal, closeModal, handleCategoryFormSubmit, confirmDeleteCategory, cancelDelete, executeDelete, ref, onMounted, get useApi() { return useApi }, get useCategoriesStore() { return useCategoriesStore }, Modal, CategoryForm };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="space-y-6"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-gray-900">Gestion des Catégories</h1><p class="text-gray-600">Gérer les catégories d&#39;équipes (ex: Senior M, U18 F)</p></div><button class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg><span>Nouvelle Catégorie</span></button></div><div class="bg-white rounded-xl border border-gray-200 p-6">`);
  if ($setup.categoriesStore.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des catégories...</p></div>`);
  } else if ($setup.categoriesStore.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.categoriesStore.error)}</p></div>`);
  } else {
    _push(`<div><div class="hidden md:block overflow-x-auto"><table class="w-full"><thead><tr class="border-b border-gray-200"><th class="text-left py-3 px-4 font-medium text-gray-900">Titre</th><th class="text-left py-3 px-4 font-medium text-gray-900">Genre</th><th class="text-right py-3 px-4 font-medium text-gray-900">Actions</th></tr></thead><tbody><!--[-->`);
    ssrRenderList($setup.categoriesStore.categories, (category) => {
      _push(`<tr class="border-b border-gray-100 hover:bg-gray-50"><td class="py-3 px-4">${
        ssrInterpolate(category.title)
      }</td><td class="py-3 px-4">${
        ssrInterpolate(category.gender)
      }</td><td class="py-3 px-4"><div class="flex items-center justify-end space-x-2"><button class="p-1 text-blue-600 hover:bg-blue-50 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></button><button class="p-1 text-red-600 hover:bg-red-50 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button></div></td></tr>`);
    });
    _push(`<!--]--></tbody></table></div><div class="md:hidden space-y-4"><!--[-->`);
    ssrRenderList($setup.categoriesStore.categories, (category) => {
      _push(`<div class="bg-gray-50 rounded-lg p-4 border border-gray-200"><div class="flex justify-between items-start mb-2"><div><h3 class="font-bold text-gray-900">${
        ssrInterpolate(category.title)
      }</h3><p class="text-sm text-gray-500">${
        ssrInterpolate(category.gender)
      }</p></div><div class="flex space-x-1"><button class="p-2 text-blue-600 bg-white border border-gray-200 rounded-lg shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></button><button class="p-2 text-red-600 bg-white border border-gray-200 rounded-lg shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button></div></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  }
  _push(`</div></div>`);
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.showForm,
    title: $setup.currentEditingCategory ? 'Modifier une Catégorie' : 'Créer une nouvelle Catégorie',
    onClose: $setup.closeModal
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent($setup["CategoryForm"], {
          initialData: $setup.currentEditingCategory,
          onSubmit: $setup.handleCategoryFormSubmit
        }, null, _parent, _scopeId));
      } else {
        return [
          createVNode($setup["CategoryForm"], {
            initialData: $setup.currentEditingCategory,
            onSubmit: $setup.handleCategoryFormSubmit
          }, null, 8, ["initialData"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.showDeleteConfirm,
    title: "Confirmer la suppression",
    onClose: $setup.cancelDelete
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="mb-4"${
          _scopeId
        }>Êtes-vous sûr de vouloir supprimer la catégorie <strong${
          _scopeId
        }>${
          ssrInterpolate($setup.categoryToDelete ? $setup.categoryToDelete.title : '')
        }</strong> ? Cette action est irréversible.</p><p class="mb-2"${
          _scopeId
        }>Pour confirmer, veuillez taper &quot;supprimer&quot; dans le champ ci-dessous :</p><input type="text"${
          ssrRenderAttr("value", $setup.deleteConfirmationInput)
        } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"${
          _scopeId
        }>`);
      } else {
        return [
          createVNode("p", { class: "mb-4" }, [
            createTextVNode("Êtes-vous sûr de vouloir supprimer la catégorie "),
            createVNode("strong", null, toDisplayString($setup.categoryToDelete ? $setup.categoryToDelete.title : ''), 1),
            createTextVNode(" ? Cette action est irréversible.")
          ]),
          createVNode("p", { class: "mb-2" }, "Pour confirmer, veuillez taper \"supprimer\" dans le champ ci-dessous :"),
          withDirectives(createVNode("input", {
            type: "text",
            "onUpdate:modelValue": $event => (($setup.deleteConfirmationInput) = $event),
            class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          }, null, 8, ["onUpdate:modelValue"]), [
            [vModelText, $setup.deleteConfirmationInput]
          ])
        ]
      }
    }),
    footer: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2"${
          _scopeId
        }>Annuler</button><button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"${
          (ssrIncludeBooleanAttr($setup.deleteConfirmationInput !== 'supprimer')) ? " disabled" : ""
        }${
          _scopeId
        }>Supprimer</button>`);
      } else {
        return [
          createVNode("button", {
            class: "px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2",
            onClick: $setup.cancelDelete
          }, "Annuler"),
          createVNode("button", {
            class: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
            disabled: $setup.deleteConfirmationInput !== 'supprimer',
            onClick: $setup.executeDelete
          }, "Supprimer", 8, ["disabled"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/management/CategoryManagement.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined
};
const CategoryManagement = /*#__PURE__*/_export_sfc(_sfc_main$4, [['ssrRender',_sfc_ssrRender$4]]);

const useSeasonsStore = defineStore("seasons", () => {
  const seasons = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const { fetchApi } = useApi();
  const setLoading = (value) => {
    isLoading.value = value;
  };
  const setError = (value) => {
    error.value = value;
  };
  const setSeasons = (newSeasons) => {
    seasons.value = newSeasons;
  };
  async function fetchSeasons() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchApi("seasons");
      setSeasons(response.data);
    } catch (e) {
      setError(e.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }
  return { seasons, isLoading, error, setLoading, setError, setSeasons, fetchSeasons };
});

const _sfc_main$3 = {
  __name: 'SeasonForm',
  props: {
  initialData: {
    type: Object,
    default: null
  }
},
  emits: ['submit', 'cancel'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;

const defaultFormData = {
  name: '',
  start_date: '',
  end_date: '',
  is_active: false,
};

const formData = ref({ ...defaultFormData });

watch(() => props.initialData, (newVal) => {
  if (newVal) {
    // Format dates for input type="date"
    const startDate = newVal.start_date ? new Date(newVal.start_date).toISOString().split('T')[0] : '';
    const endDate = newVal.end_date ? new Date(newVal.end_date).toISOString().split('T')[0] : '';
    formData.value = { ...defaultFormData, ...newVal, start_date: startDate, end_date: endDate };
  } else {
    formData.value = { ...defaultFormData };
  }
}, { immediate: true });

const handleSubmit = () => {
  emit('submit', formData.value);
};

const __returned__ = { props, emit, defaultFormData, formData, handleSubmit, ref, watch };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${
    ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))
  }><div><label for="name" class="block text-sm font-medium text-gray-700">Nom de la saison</label><input type="text" id="name"${
    ssrRenderAttr("value", $setup.formData.name)
  } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required></div><div><label for="start_date" class="block text-sm font-medium text-gray-700">Date de début</label><input type="date" id="start_date"${
    ssrRenderAttr("value", $setup.formData.start_date)
  } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required></div><div><label for="end_date" class="block text-sm font-medium text-gray-700">Date de fin</label><input type="date" id="end_date"${
    ssrRenderAttr("value", $setup.formData.end_date)
  } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required></div><div class="flex items-center"><input type="checkbox" id="is_active"${
    (ssrIncludeBooleanAttr((Array.isArray($setup.formData.is_active))
      ? ssrLooseContain($setup.formData.is_active, null)
      : $setup.formData.is_active)) ? " checked" : ""
  } class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"><label for="is_active" class="ml-2 block text-sm text-gray-900">Saison active</label></div><div class="flex justify-end space-x-3 mt-6"><button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">${
    ssrInterpolate($props.initialData ? 'Modifier' : 'Créer')
  }</button></div></form>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/forms/SeasonForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined
};
const SeasonForm = /*#__PURE__*/_export_sfc(_sfc_main$3, [['ssrRender',_sfc_ssrRender$3]]);

const _sfc_main$2 = {
  __name: 'SeasonManagement',
  setup(__props, { expose: __expose }) {
  __expose();

const { fetchApi } = useApi();
const seasonsStore = useSeasonsStore();

const showForm = ref(false);
const currentEditingSeason = ref(null);
const showDeleteConfirm = ref(false);
const seasonToDelete = ref(null);
const deleteConfirmationInput = ref('');

const fetchSeasons = async () => {
  seasonsStore.setLoading(true);
  seasonsStore.setError(null);
  try {
    const response = await fetchApi('seasons');
    seasonsStore.setSeasons(response.data);
  } catch (e) {
    seasonsStore.setError(e.message);
  } finally {
    seasonsStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingSeason.value = null;
  showForm.value = true;
};

const openEditModal = (season) => {
  currentEditingSeason.value = { ...season };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingSeason.value = null;
};

const handleSeasonFormSubmit = async (formData) => {
  seasonsStore.setLoading(true);
  seasonsStore.setError(null);
  try {
    if (currentEditingSeason.value) {
      // Update existing season
      await fetchApi(`seasons/${currentEditingSeason.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      // Create new season
      await fetchApi('seasons', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchSeasons(); // Refresh the list
    closeModal();
  } catch (e) {
    seasonsStore.setError(e.message);
  } finally {
    seasonsStore.setLoading(false);
  }
};

const confirmDeleteSeason = (season) => {
  seasonToDelete.value = season;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = ''; // Clear input on open
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  seasonToDelete.value = null;
  deleteConfirmationInput.value = ''; // Clear input on close
};

const executeDelete = async () => {
  if (!seasonToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    return;
  }

  seasonsStore.setLoading(true);
  seasonsStore.setError(null);
  try {
    await fetchApi(`seasons/${seasonToDelete.value.id}`, { method: 'DELETE' });
    await fetchSeasons(); // Refresh the list
    cancelDelete();
  } catch (e) {
    seasonsStore.setError(e.message);
  } finally {
    seasonsStore.setLoading(false);
  }
};

onMounted(fetchSeasons);

const __returned__ = { fetchApi, seasonsStore, showForm, currentEditingSeason, showDeleteConfirm, seasonToDelete, deleteConfirmationInput, fetchSeasons, openCreateModal, openEditModal, closeModal, handleSeasonFormSubmit, confirmDeleteSeason, cancelDelete, executeDelete, ref, onMounted, get useApi() { return useApi }, get useSeasonsStore() { return useSeasonsStore }, Modal, SeasonForm };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="space-y-6"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-gray-900">Gestion des Saisons</h1><p class="text-gray-600">Gérer les saisons sportives</p></div><button class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg><span>Nouvelle Saison</span></button></div><div class="bg-white rounded-xl border border-gray-200 p-6">`);
  if ($setup.seasonsStore.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des saisons...</p></div>`);
  } else if ($setup.seasonsStore.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.seasonsStore.error)}</p></div>`);
  } else {
    _push(`<div><div class="hidden md:block overflow-x-auto"><table class="w-full"><thead><tr class="border-b border-gray-200"><th class="text-left py-3 px-4 font-medium text-gray-900">Nom</th><th class="text-left py-3 px-4 font-medium text-gray-900">Début</th><th class="text-left py-3 px-4 font-medium text-gray-900">Fin</th><th class="text-left py-3 px-4 font-medium text-gray-900">Active</th><th class="text-right py-3 px-4 font-medium text-gray-900">Actions</th></tr></thead><tbody><!--[-->`);
    ssrRenderList($setup.seasonsStore.seasons, (season) => {
      _push(`<tr class="border-b border-gray-100 hover:bg-gray-50"><td class="py-3 px-4">${
        ssrInterpolate(season.name)
      }</td><td class="py-3 px-4">${
        ssrInterpolate(new Date(season.start_date).toLocaleDateString('fr-FR'))
      }</td><td class="py-3 px-4">${
        ssrInterpolate(new Date(season.end_date).toLocaleDateString('fr-FR'))
      }</td><td class="py-3 px-4"><span class="${
        ssrRenderClass([season.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800', 'px-2.5 py-0.5 rounded-full text-xs font-medium'])
      }">${
        ssrInterpolate(season.is_active ? 'Oui' : 'Non')
      }</span></td><td class="py-3 px-4"><div class="flex items-center justify-end space-x-2"><button class="p-1 text-blue-600 hover:bg-blue-50 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></button><button class="p-1 text-red-600 hover:bg-red-50 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button></div></td></tr>`);
    });
    _push(`<!--]--></tbody></table></div><div class="md:hidden space-y-4"><!--[-->`);
    ssrRenderList($setup.seasonsStore.seasons, (season) => {
      _push(`<div class="bg-gray-50 rounded-lg p-4 border border-gray-200"><div class="flex justify-between items-start mb-3"><div><h3 class="font-bold text-gray-900">${
        ssrInterpolate(season.name)
      }</h3><span class="${
        ssrRenderClass([season.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800', 'px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 inline-block'])
      }">${
        ssrInterpolate(season.is_active ? 'Active' : 'Inactive')
      }</span></div><div class="flex space-x-1"><button class="p-2 text-blue-600 bg-white border border-gray-200 rounded-lg shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></button><button class="p-2 text-red-600 bg-white border border-gray-200 rounded-lg shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button></div></div><div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-gray-500">Début:</span><span class="font-medium text-gray-900">${
        ssrInterpolate(new Date(season.start_date).toLocaleDateString('fr-FR'))
      }</span></div><div class="flex justify-between"><span class="text-gray-500">Fin:</span><span class="font-medium text-gray-900">${
        ssrInterpolate(new Date(season.end_date).toLocaleDateString('fr-FR'))
      }</span></div></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  }
  _push(`</div></div>`);
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.showForm,
    title: $setup.currentEditingSeason ? 'Modifier une Saison' : 'Créer une nouvelle Saison',
    onClose: $setup.closeModal
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent($setup["SeasonForm"], {
          initialData: $setup.currentEditingSeason,
          onSubmit: $setup.handleSeasonFormSubmit
        }, null, _parent, _scopeId));
      } else {
        return [
          createVNode($setup["SeasonForm"], {
            initialData: $setup.currentEditingSeason,
            onSubmit: $setup.handleSeasonFormSubmit
          }, null, 8, ["initialData"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["Modal"], {
    show: $setup.showDeleteConfirm,
    title: "Confirmer la suppression",
    onClose: $setup.cancelDelete
  }, {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p class="mb-4"${
          _scopeId
        }>Êtes-vous sûr de vouloir supprimer la saison <strong${
          _scopeId
        }>${
          ssrInterpolate($setup.seasonToDelete ? $setup.seasonToDelete.name : '')
        }</strong> ? Cette action est irréversible.</p><p class="mb-2"${
          _scopeId
        }>Pour confirmer, veuillez taper &quot;supprimer&quot; dans le champ ci-dessous :</p><input type="text"${
          ssrRenderAttr("value", $setup.deleteConfirmationInput)
        } class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"${
          _scopeId
        }>`);
      } else {
        return [
          createVNode("p", { class: "mb-4" }, [
            createTextVNode("Êtes-vous sûr de vouloir supprimer la saison "),
            createVNode("strong", null, toDisplayString($setup.seasonToDelete ? $setup.seasonToDelete.name : ''), 1),
            createTextVNode(" ? Cette action est irréversible.")
          ]),
          createVNode("p", { class: "mb-2" }, "Pour confirmer, veuillez taper \"supprimer\" dans le champ ci-dessous :"),
          withDirectives(createVNode("input", {
            type: "text",
            "onUpdate:modelValue": $event => (($setup.deleteConfirmationInput) = $event),
            class: "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          }, null, 8, ["onUpdate:modelValue"]), [
            [vModelText, $setup.deleteConfirmationInput]
          ])
        ]
      }
    }),
    footer: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2"${
          _scopeId
        }>Annuler</button><button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"${
          (ssrIncludeBooleanAttr($setup.deleteConfirmationInput !== 'supprimer')) ? " disabled" : ""
        }${
          _scopeId
        }>Supprimer</button>`);
      } else {
        return [
          createVNode("button", {
            class: "px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2",
            onClick: $setup.cancelDelete
          }, "Annuler"),
          createVNode("button", {
            class: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
            disabled: $setup.deleteConfirmationInput !== 'supprimer',
            onClick: $setup.executeDelete
          }, "Supprimer", 8, ["disabled"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/management/SeasonManagement.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const SeasonManagement = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2]]);

const _sfc_main$1 = {
  __name: 'SectionManager',
  props: {
  section: String
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const sectionComponents = {
  users: UserManagement,
  teams: TeamManagement,
  matches: MatchManagement,
  events: EventManagement,
  categories: CategoryManagement,
  seasons: SeasonManagement
};

const currentSectionComponent = computed(() => sectionComponents[props.section] || null);

const __returned__ = { props, sectionComponents, currentSectionComponent, computed, UserManagement, TeamManagement, MatchManagement, EventManagement, CategoryManagement, SeasonManagement };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.currentSectionComponent), null, null), _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/SectionManager.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const SectionManager = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const _sfc_main = {
  __name: 'AdminDashboard',
  setup(__props, { expose: __expose }) {
  __expose();

const authStore = useAuthStore();

const activeSection = ref('dashboard');
const isSidebarOpen = ref(false);
const adminName = computed(() => authStore.user ? authStore.user.firstname : 'Admin');

const handleLogout = () => {
  authStore.logout();
  window.location.href = '/connexion';
};

const handleSectionChange = (section) => {
  activeSection.value = section;
  isSidebarOpen.value = false; // Close sidebar on mobile when selection changes
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const __returned__ = { authStore, activeSection, isSidebarOpen, adminName, handleLogout, handleSectionChange, toggleSidebar, closeSidebar, ref, computed, get useAuthStore() { return useAuthStore }, HeaderBar, SidebarNavigation, DashboardOverview, SectionManager };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent($setup["HeaderBar"], {
    "admin-name": $setup.adminName,
    onLogout: $setup.handleLogout,
    onToggleSidebar: $setup.toggleSidebar
  }, null, _parent));
  _push(`<div class="flex flex-1 overflow-hidden relative">`);
  _push(ssrRenderComponent($setup["SidebarNavigation"], {
    "active-section": $setup.activeSection,
    "is-open": $setup.isSidebarOpen,
    onSectionChange: $setup.handleSectionChange,
    onClose: $setup.closeSidebar
  }, null, _parent));
  _push(`<main class="flex-1 overflow-auto"><div class="p-6"><div class="h-full">`);
  if ($setup.activeSection === 'dashboard') {
    _push(ssrRenderComponent($setup["DashboardOverview"], null, null, _parent));
  } else {
    _push(ssrRenderComponent($setup["SectionManager"], { section: $setup.activeSection }, null, _parent));
  }
  _push(`</div></div></main></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/AdminDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const AdminDashboard = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Admin Dashboard - CCSLR St Joseph" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AdminDashboard", AdminDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/manage/AdminDashboard.vue", "client:component-export": "default" })} ` })}`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/manage/index.astro", void 0);

const $$file = "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/manage/index.astro";
const $$url = "/manage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

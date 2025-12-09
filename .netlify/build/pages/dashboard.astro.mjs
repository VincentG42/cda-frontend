/* empty css                                           */
import { c as createComponent, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_BAntvzzV.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BODWYcB2.mjs';
import { useSSRContext, computed, mergeProps, h, createVNode, resolveDynamicComponent, ref, onMounted } from 'vue';
import { u as useAuthStore, _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_ceIx8-CJ.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderVNode, ssrRenderComponent } from 'vue/server-renderer';
import { u as useApi } from '../chunks/useApi_BbvW2iJx.mjs';
import { P as PlayerStatsDashboard } from '../chunks/PlayerStatsDashboard_i8gk7dPl.mjs';
import { T as TeamStatsDashboard } from '../chunks/TeamStatsDashboard_By8pvC0M.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const _sfc_main$7 = {
  __name: 'HeaderBar',
  props: {
  userName: String
},
  emits: ['logout', 'toggle-sidebar'],
  setup(__props, { expose: __expose }) {
  __expose();

const authStore = useAuthStore();





const canAccessAdminDashboard = computed(() => {
  if (!authStore.user || !authStore.user.user_type_id) return false;
  // 1: Player, 2: Coach, 3: Staff, 4: President, 5: Admin
  return [2, 3, 4, 5].includes(Number(authStore.user.user_type_id));
});

const __returned__ = { authStore, canAccessAdminDashboard, computed, get useAuthStore() { return useAuthStore } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white shadow-sm border-b border-gray-200 px-4 py-3 md:px-6 md:py-4" }, _attrs))}><div class="flex items-center justify-between"><div class="flex items-center space-x-3 md:space-x-4"><button class="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"><span class="sr-only">Ouvrir le menu</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button><a href="/" class="flex items-center space-x-3 md:space-x-4 hover:opacity-80 transition-opacity"><div class="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0"><div class="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-md flex items-center justify-center filter brightness-90"><span class="text-white font-bold text-base md:text-lg">CC</span></div></div><div><h1 class="text-lg md:text-xl font-bold text-gray-900 truncate max-w-[150px] md:max-w-none"> CCSLR Saint Joseph </h1><p class="text-xs md:text-sm text-gray-600">Espace Licencié</p></div></a></div><div class="flex items-center space-x-2 md:space-x-4"><div class="hidden md:flex items-center space-x-4"><a href="/" class="text-gray-600 hover:text-primary font-medium text-sm transition-colors"> Accueil </a>`);
  if ($setup.canAccessAdminDashboard) {
    _push(`<a href="/manage" class="text-gray-600 hover:text-primary font-medium text-sm transition-colors"> Admin Dashboard </a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="h-6 w-px bg-gray-300 mx-2"></div><div class="text-right"><p class="text-sm font-medium text-gray-900">${ssrInterpolate($props.userName)}</p><p class="text-xs text-gray-500">Licencié</p></div></div><button class="flex items-center space-x-2 px-3 py-2 md:px-4 md:py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg><span class="text-sm font-medium hidden md:inline">Déconnexion</span></button></div></div></header>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/dashboard/HeaderBar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined
};
const HeaderBar = /*#__PURE__*/_export_sfc(_sfc_main$7, [['ssrRender',_sfc_ssrRender$7]]);

const _sfc_main$6 = {
  __name: 'SidebarNavigation',
  props: {
  activeSection: String,
  isOpen: Boolean
},
  emits: ['section-change', 'close'],
  setup(__props, { expose: __expose }) {
  __expose();

const BarChart3 = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M3 3v18h18' }), h('path', { d: 'M18 17V9' }), h('path', { d: 'M13 17V5' }), h('path', { d: 'M8 17v-3' })]);
const Shield = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })]);
const Calendar = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('rect', { width: '18', height: '18', x: '3', y: '4', rx: '2', ry: '2' }), h('line', { x1: '16', x2: '16', y1: '2', y2: '6' }), h('line', { x1: '8', x2: '8', y1: '2', y2: '6' }), h('line', { x1: '3', x2: '21', y1: '10', y2: '10' })]);
const Megaphone = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'm3 11 18-5v12L3 14v-3z' }), h('path', { d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6' })]);




const navigationItems = [
  { id: 'dashboard', label: 'Mon Tableau de Bord', icon: BarChart3, description: 'Vue d\'ensemble' },
  { id: 'stats', label: 'Mes Statistiques', icon: BarChart3, description: 'Performances individuelles' },
  { id: 'team', label: 'Mon Équipe', icon: Shield, description: 'Infos et joueurs' },
  { id: 'matches', label: 'Mes Matchs', icon: Calendar, description: 'Calendrier et résultats' },
  { id: 'events', label: 'Événements du Club', icon: Megaphone, description: 'Actualités' }
];

const __returned__ = { BarChart3, Shield, Calendar, Megaphone, navigationItems, h };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
              $props.activeSection === item.id ? 'bg-primary/10 text-primary border border-primary/20' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            ])}">`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
      class: [$props.activeSection === item.id ? 'text-primary' : 'text-gray-500']
    }, null), _parent);
    _push(`<div class="flex-1"><p class="${
      ssrRenderClass(['text-sm font-medium', $props.activeSection === item.id ? 'text-primary' : 'text-gray-900'])
    }">${
      ssrInterpolate(item.label)
    }</p><p class="${
      ssrRenderClass(['text-xs', $props.activeSection === item.id ? 'text-primary' : 'text-gray-500'])
    }">${
      ssrInterpolate(item.description)
    }</p></div></button></li>`);
  });
  _push(`<!--]--></ul></div></nav></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/dashboard/SidebarNavigation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined
};
const SidebarNavigation = /*#__PURE__*/_export_sfc(_sfc_main$6, [['ssrRender',_sfc_ssrRender$6]]);

const _sfc_main$5 = {
  __name: 'DashboardOverview',
  props: {
    userName: String
  },
  setup(__props, { expose: __expose }) {
  __expose();



const { fetchApi } = useApi();

const stats = ref([]);
const upcomingMatches = ref([]);
const recentEvents = ref([]);
const isLoading = ref(false);
const error = ref(null);

const Users = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }), h('circle', { cx: '9', cy: '7', r: '4' }), h('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }), h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })]);
const Trophy = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6' }), h('path', { d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18' }), h('path', { d: 'M4 22h16' }), h('path', { d: 'M10 11V7a3 3 0 0 1 6 0v4' }), h('path', { d: 'M12 17v5' }), h('path', { d: 'M12 17H6.5a2.5 2.5 0 0 1 0-5H12c0 .5 0 1 0 2s0 .5 0 1' }), h('path', { d: 'M12 17h5.5a2.5 2.5 0 0 0 0-5H12c0 .5 0 1 0 2s0 .5 0 1' })]);
const Medal = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M7.21 15.18 8 22l4-2 4 2-1.79-6.82M18 10a6 6 0 0 0-12 0v.34L12 14l6-3.66Z' }), h('path', { d: 'M12 8V2l4 2 4-2v6' }), h('path', { d: 'M12 8V2L8 4 4 2v6' })]);
const Clock = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('circle', { cx: '12', cy: '12', r: '10' }), h('polyline', { points: '12 6 12 12 16 14' })]);

const fetchDashboardData = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi('me/dashboard');
    stats.value = [
      { label: 'Matchs Joués', value: response.matchesPlayed, icon: Trophy, color: 'bg-primary' },
      { label: 'Victoires', value: response.wins, icon: Medal, color: 'bg-primary' },
      { label: 'Prochain Match', value: response.nextMatchDate !== 'N/A' ? new Date(response.nextMatchDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'N/A', icon: Clock, color: 'bg-yellow-500' },
      { label: 'Points Moyens', value: response.avgPoints, icon: Users, color: 'bg-purple-500' },
    ];
    upcomingMatches.value = (response.upcomingMatches || []).map(match => ({
      id: match.id,
      homeTeam: match.home_team.name,
      awayTeam: match.away_team.name,
      date: new Date(match.happens_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }),
      time: new Date(match.happens_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    }));
    recentEvents.value = (response.recentEvents || []).map(event => ({
      id: event.id,
      title: event.title,
      date: new Date(event.start_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }),
    }));
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchDashboardData);

const __returned__ = { fetchApi, stats, upcomingMatches, recentEvents, isLoading, error, Users, Trophy, Medal, Clock, fetchDashboardData, h, ref, onMounted, get useApi() { return useApi } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(_attrs)
  }><div class="mb-6"><h2 class="text-2xl font-bold text-gray-900">Bienvenue, ${
    ssrInterpolate($props.userName)
  } !</h2><p class="text-gray-600">Voici un aperçu de votre activité.</p></div>`);
  if ($setup.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des données du tableau de bord...</p></div>`);
  } else if ($setup.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.error)}</p></div>`);
  } else {
    _push(`<div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"><!--[-->`);
    ssrRenderList($setup.stats, (stat) => {
      _push(`<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center space-x-4"><div class="${ssrRenderClass([stat.color, 'w-12 h-12 rounded-lg flex items-center justify-center'])}">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(stat.icon), { class: "text-white" }, null), _parent);
      _push(`</div><div><p class="text-sm text-gray-600">${
        ssrInterpolate(stat.label)
      }</p><p class="text-2xl font-bold text-gray-900">${
        ssrInterpolate(stat.value)
      }</p></div></div>`);
    });
    _push(`<!--]--></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><h3 class="text-lg font-semibold text-gray-900 mb-4">Mes prochains matchs</h3><ul class="space-y-4"><!--[-->`);
    ssrRenderList($setup.upcomingMatches, (match) => {
      _push(`<li class="flex items-center space-x-3"><div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg></div><div><p class="font-medium text-gray-800">${
        ssrInterpolate(match.homeTeam)
      } vs ${
        ssrInterpolate(match.awayTeam)
      }</p><p class="text-sm text-gray-500">${
        ssrInterpolate(match.date)
      } - ${
        ssrInterpolate(match.time)
      }</p></div></li>`);
    });
    _push(`<!--]--></ul></div><div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><h3 class="text-lg font-semibold text-gray-900 mb-4">Actualités du club</h3><ul class="space-y-4"><!--[-->`);
    ssrRenderList($setup.recentEvents, (event) => {
      _push(`<li class="flex items-center space-x-3"><div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg></div><div><p class="font-medium text-gray-800">${
        ssrInterpolate(event.title)
      }</p><p class="text-sm text-gray-500">${
        ssrInterpolate(event.date)
      }</p></div></li>`);
    });
    _push(`<!--]--></ul></div></div></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/dashboard/DashboardOverview.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined
};
const DashboardOverview = /*#__PURE__*/_export_sfc(_sfc_main$5, [['ssrRender',_sfc_ssrRender$5]]);

const _sfc_main$4 = {
  __name: 'MyStatsWrapper',
  setup(__props, { expose: __expose }) {
  __expose();

const authStore = useAuthStore();
const userId = ref(null);
const teamId = ref(null);

onMounted(() => {
  if (authStore.user) {
    userId.value = authStore.user.id;
    // Assuming the user object has a 'teams' array and we take the first one.
    if (authStore.user.teams && authStore.user.teams.length > 0) {
      teamId.value = authStore.user.teams[0].id;
    }
  } else {
    console.warn("User data not found in authStore for stats page.");
  }
});

const __returned__ = { authStore, userId, teamId, ref, onMounted, get useAuthStore() { return useAuthStore }, PlayerStatsDashboard, TeamStatsDashboard };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.userId) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><div><h2 class="text-2xl font-bold text-gray-800 mb-4">Mes Statistiques Personnelles</h2><div class="bg-white rounded-xl border border-gray-200 p-6">`);
    _push(ssrRenderComponent($setup["PlayerStatsDashboard"], { "player-id": $setup.userId }, null, _parent));
    _push(`</div></div>`);
    if ($setup.teamId) {
      _push(`<div><h2 class="text-2xl font-bold text-gray-800 mb-4">Statistiques de mon Équipe</h2><div class="bg-white rounded-xl border border-gray-200 p-6">`);
      _push(ssrRenderComponent($setup["TeamStatsDashboard"], { "team-id": $setup.teamId }, null, _parent));
      _push(`</div></div>`);
    } else {
      _push(`<div class="text-center p-4 bg-gray-50 rounded-lg"><p>Vous n&#39;êtes actuellement associé à aucune équipe.</p></div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center p-8" }, _attrs))}><p>Connexion requise pour voir les statistiques.</p></div>`);
  }
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/profile/MyStatsWrapper.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined
};
const MyStatsWrapper = /*#__PURE__*/_export_sfc(_sfc_main$4, [['ssrRender',_sfc_ssrRender$4]]);

const _sfc_main$3 = {
  __name: 'UserTeamInfo',
  setup(__props, { expose: __expose }) {
  __expose();

const { fetchApi } = useApi();

const team = ref(null);
const isLoading = ref(false);
const error = ref(null);

const fetchTeamInfo = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi('me/teams'); // Assuming this endpoint returns the user's team info
    team.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchTeamInfo);

const __returned__ = { fetchApi, team, isLoading, error, fetchTeamInfo, ref, onMounted, get useApi() { return useApi } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-2xl font-bold text-gray-900 mb-6">Mon Équipe</h2>`);
  if ($setup.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des informations de l&#39;équipe...</p></div>`);
  } else if ($setup.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.error)}</p></div>`);
  } else if ($setup.team) {
    _push(`<div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8"><h3 class="text-xl font-semibold text-gray-900 mb-4">${
      ssrInterpolate($setup.team.name)
    }</h3><p class="text-gray-600 mb-4">Coach: ${
      ssrInterpolate($setup.team.coach ? $setup.team.coach.firstname + ' ' + $setup.team.coach.lastname : 'N/A')
    }</p><p class="text-gray-600">Catégorie: ${
      ssrInterpolate($setup.team.category ? $setup.team.category.name : 'N/A')
    }</p></div><h3 class="text-xl font-semibold text-gray-900 mb-4">Joueurs</h3><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><ul class="space-y-4"><!--[-->`);
    ssrRenderList($setup.team.users, (player) => {
      _push(`<li class="flex items-center space-x-3"><div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><div><p class="font-medium text-gray-800">${
        ssrInterpolate(player.firstname)
      } ${
        ssrInterpolate(player.lastname)
      }</p><p class="text-sm text-gray-500">${
        ssrInterpolate(player.position || 'Joueur')
      }</p></div></li>`);
    });
    _push(`<!--]--></ul></div></div>`);
  } else {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Aucune information d&#39;équipe disponible.</p></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/dashboard/UserTeamInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined
};
const UserTeamInfo = /*#__PURE__*/_export_sfc(_sfc_main$3, [['ssrRender',_sfc_ssrRender$3]]);

const _sfc_main$2 = {
  __name: 'UserMatches',
  setup(__props, { expose: __expose }) {
  __expose();

const { fetchApi } = useApi();

const matches = ref([]);
const isLoading = ref(false);
const error = ref(null);

const fetchUserMatches = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi('me/matches');
    matches.value = response;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

const nextMatchId = computed(() => {
  const now = new Date();
  const futureMatch = matches.value.find(match => new Date(match.date) > now);
  return futureMatch ? futureMatch.id : null;
});

onMounted(fetchUserMatches);

const __returned__ = { fetchApi, matches, isLoading, error, fetchUserMatches, nextMatchId, ref, onMounted, computed, get useApi() { return useApi } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-2xl font-bold text-gray-900 mb-6">Mes Matchs</h2>`);
  if ($setup.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement de vos matchs...</p></div>`);
  } else if ($setup.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.error)}</p></div>`);
  } else if ($setup.matches.length) {
    _push(`<div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h3 class="text-xl font-semibold text-gray-900 mb-4">Mes Matchs</h3><ul class="space-y-4"><!--[-->`);
    ssrRenderList($setup.matches, (match) => {
      _push(`<li class="${ssrRenderClass([{
            'border-blue-500 ring-2 ring-blue-200': match.id === $setup.nextMatchId,
            'bg-green-50 border-green-200 hover:bg-green-100': match.is_victory === true && match.id !== $setup.nextMatchId,
            'bg-red-50 border-red-200 hover:bg-red-100': match.is_victory === false && match.id !== $setup.nextMatchId,
            'border-gray-100 hover:bg-gray-50': match.is_victory == null && match.id !== $setup.nextMatchId
          }, "relative flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border transition-colors duration-200 gap-4"])}">`);
      if (match.id === $setup.nextMatchId) {
        _push(`<div class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10"> Prochain Match </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col md:flex-row md:items-center gap-4 w-full"><div class="flex items-center gap-4 md:w-auto"><div class="text-center w-16 flex-shrink-0"><div class="text-sm font-medium text-gray-900">${
        ssrInterpolate(new Date(match.date).toLocaleDateString('fr-FR', { weekday: 'short' }).toUpperCase())
      }</div><div class="text-xs text-gray-500">${
        ssrInterpolate(new Date(match.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }).toUpperCase())
      }</div></div><div class="flex items-center space-x-2 md:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg><span class="text-sm text-gray-600">${
        ssrInterpolate(match.time)
      }</span></div></div><div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6"><div class="flex items-center gap-2 flex-wrap"><span class="font-medium text-lg">${
        ssrInterpolate(match.home_team.name)
      }</span><span class="text-gray-400 text-sm">vs</span><span class="font-medium text-lg">${
        ssrInterpolate(match.away_team.name)
      }</span></div><div class="flex items-center gap-4 text-sm text-gray-600 md:w-auto"><div class="hidden md:flex items-center space-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg><span>${
        ssrInterpolate(match.time)
      }</span></div><div class="flex items-center space-x-1">`);
      if (match.is_at_home) {
        _push(`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"> Domicile </span>`);
      } else {
        _push(`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"> Extérieur </span>`);
      }
      _push(`</div></div></div>`);
      if (match.team_score != null && match.opponent_score != null) {
        _push(`<div class="flex md:flex-col items-center justify-between md:justify-center md:items-end w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 mt-2 md:mt-0 md:ml-auto"><span class="md:hidden text-sm font-medium text-gray-500">Score</span><div class="text-right"><div class="${
          ssrRenderClass([{
                    'text-green-700': match.is_victory,
                    'text-red-700': match.is_victory === false,
                    'text-gray-800': match.is_victory == null
                  }, "font-bold text-xl"])
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
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></li>`);
    });
    _push(`<!--]--></ul></div></div>`);
  } else {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Aucun match trouvé.</p></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/dashboard/UserMatches.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const UserMatches = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2]]);

const _sfc_main$1 = {
  __name: 'UserEvents',
  setup(__props, { expose: __expose }) {
  __expose();

const { fetchApi } = useApi();

const events = ref([]);
const isLoading = ref(false);
const error = ref(null);

const fetchUserEvents = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi('events'); // Assuming this endpoint returns all events
    events.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchUserEvents);

const __returned__ = { fetchApi, events, isLoading, error, fetchUserEvents, ref, onMounted, get useApi() { return useApi } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-2xl font-bold text-gray-900 mb-6">Événements du Club</h2>`);
  if ($setup.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement des événements...</p></div>`);
  } else if ($setup.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.error)}</p></div>`);
  } else if ($setup.events.length) {
    _push(`<div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
    ssrRenderList($setup.events, (event) => {
      _push(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h3 class="text-lg font-semibold text-gray-900 mb-2">${
        ssrInterpolate(event.title)
      }</h3><p class="text-sm text-gray-600 mb-4">${
        ssrInterpolate(event.description)
      }</p><div class="space-y-2 text-sm text-gray-600"><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><span>${
        ssrInterpolate(new Date(event.date).toLocaleDateString('fr-FR'))
      }</span></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg><span>${
        ssrInterpolate(event.time)
      }</span></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>${
        ssrInterpolate(event.location)
      }</span></div></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Aucun événement à afficher.</p></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/dashboard/UserEvents.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const UserEvents = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const _sfc_main = {
  __name: 'UserDashboard',
  setup(__props, { expose: __expose }) {
  __expose();

const authStore = useAuthStore();

const activeSection = ref('dashboard');
const isSidebarOpen = ref(false);
const userName = computed(() => authStore.user ? authStore.user.firstname : 'Utilisateur');

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

const __returned__ = { authStore, activeSection, isSidebarOpen, userName, handleLogout, handleSectionChange, toggleSidebar, closeSidebar, ref, computed, get useAuthStore() { return useAuthStore }, HeaderBar, SidebarNavigation, DashboardOverview, MyStatsWrapper, UserTeamInfo, UserMatches, UserEvents };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent($setup["HeaderBar"], {
    "user-name": $setup.userName,
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
    _push(ssrRenderComponent($setup["DashboardOverview"], { "user-name": $setup.userName }, null, _parent));
  } else if ($setup.activeSection === 'stats') {
    _push(ssrRenderComponent($setup["MyStatsWrapper"], null, null, _parent));
  } else if ($setup.activeSection === 'team') {
    _push(ssrRenderComponent($setup["UserTeamInfo"], null, null, _parent));
  } else if ($setup.activeSection === 'matches') {
    _push(ssrRenderComponent($setup["UserMatches"], null, null, _parent));
  } else if ($setup.activeSection === 'events') {
    _push(ssrRenderComponent($setup["UserEvents"], null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></main></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/dashboard/UserDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const UserDashboard = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "User Dashboard - CCSLR St Joseph" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UserDashboard", UserDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/dashboard/UserDashboard.vue", "client:component-export": "default" })} ` })}`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/dashboard/index.astro", void 0);

const $$file = "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

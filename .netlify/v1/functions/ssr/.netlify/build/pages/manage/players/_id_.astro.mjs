/* empty css                                                 */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_BAntvzzV.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_B1aUlrCE.mjs';
import { useSSRContext, ref, watch, mergeProps, withCtx, createBlock, openBlock, createVNode, toDisplayString, Fragment, renderList, computed, onMounted } from 'vue';
import { u as useApi } from '../../../chunks/useApi_BbvW2iJx.mjs';
import { P as PlayerStatsDashboard } from '../../../chunks/PlayerStatsDashboard_i8gk7dPl.mjs';
import { M as Modal } from '../../../chunks/Modal_B79pGo29.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../../chunks/_plugin-vue_export-helper_ceIx8-CJ.mjs';
export { renderers } from '../../../renderers.mjs';

const _sfc_main$1 = {
  __name: 'MatchPeriodStatsModal',
  props: {
  show: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: [String, Number],
    required: true,
  },
  encounterId: {
    type: [String, Number],
    required: true,
  },
},
  emits: ['close'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;

const { fetchApi } = useApi();
const periodStats = ref([]);
const isLoading = ref(false);
const error = ref(null);

const fetchPeriodStats = async () => {
  if (!props.show || !props.userId || !props.encounterId) {
    periodStats.value = [];
    return;
  }

  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi(`/players/${props.userId}/match/${props.encounterId}/stats`);
    periodStats.value = response;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

// Watch for changes in show prop to fetch data when modal opens
watch(() => props.show, (newVal) => {
  if (newVal) {
    fetchPeriodStats();
  }
});

const __returned__ = { props, emit, fetchApi, periodStats, isLoading, error, fetchPeriodStats, ref, watch, get useApi() { return useApi }, Modal };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["Modal"], mergeProps({
    show: $props.show,
    title: "Statistiques par Quart-Temps",
    onClose: $event => (_ctx.$emit('close'))
  }, _attrs), {
    body: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        if ($setup.isLoading) {
          _push(`<div class="text-center py-4"${
            _scopeId
          }><p class="text-gray-500"${
            _scopeId
          }>Chargement des statistiques par quart-temps...</p></div>`);
        } else if ($setup.error) {
          _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-lg"${
            _scopeId
          }><p class="font-bold"${
            _scopeId
          }>Erreur:</p><p${
            _scopeId
          }>${
            ssrInterpolate($setup.error)
          }</p></div>`);
        } else if ($setup.periodStats.length) {
          _push(`<div${
            _scopeId
          }><table class="min-w-full leading-normal"${
            _scopeId
          }><thead${
            _scopeId
          }><tr${
            _scopeId
          }><th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"${
            _scopeId
          }>Quart-Temps</th><th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"${
            _scopeId
          }>Points</th><th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"${
            _scopeId
          }>Rebonds</th><th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"${
            _scopeId
          }>Passes</th><th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"${
            _scopeId
          }>Interceptions</th><th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"${
            _scopeId
          }>Pertes de balle</th><th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"${
            _scopeId
          }>Fautes</th></tr></thead><tbody${
            _scopeId
          }><!--[-->`);
          ssrRenderList($setup.periodStats, (stats) => {
            _push(`<tr${
              _scopeId
            }><td class="px-3 py-3 border-b border-gray-200 bg-white text-sm"${
              _scopeId
            }>${
              ssrInterpolate(stats.period)
            }</td><td class="px-3 py-3 border-b border-gray-200 bg-white text-sm"${
              _scopeId
            }>${
              ssrInterpolate(stats.points)
            }</td><td class="px-3 py-3 border-b border-gray-200 bg-white text-sm"${
              _scopeId
            }>${
              ssrInterpolate(stats.rebounds)
            }</td><td class="px-3 py-3 border-b border-gray-200 bg-white text-sm"${
              _scopeId
            }>${
              ssrInterpolate(stats.assists)
            }</td><td class="px-3 py-3 border-b border-gray-200 bg-white text-sm"${
              _scopeId
            }>${
              ssrInterpolate(stats.steals)
            }</td><td class="px-3 py-3 border-b border-gray-200 bg-white text-sm"${
              _scopeId
            }>${
              ssrInterpolate(stats.turnovers)
            }</td><td class="px-3 py-3 border-b border-gray-200 bg-white text-sm"${
              _scopeId
            }>${
              ssrInterpolate(stats.fouls)
            }</td></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        } else {
          _push(`<div class="text-center py-4"${
            _scopeId
          }><p class="text-gray-500"${
            _scopeId
          }>Aucune statistique par quart-temps disponible pour ce match.</p></div>`);
        }
      } else {
        return [
          ($setup.isLoading)
            ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center py-4"
              }, [
                createVNode("p", { class: "text-gray-500" }, "Chargement des statistiques par quart-temps...")
              ]))
            : ($setup.error)
              ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-lg"
                }, [
                  createVNode("p", { class: "font-bold" }, "Erreur:"),
                  createVNode("p", null, toDisplayString($setup.error), 1)
                ]))
              : ($setup.periodStats.length)
                ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode("table", { class: "min-w-full leading-normal" }, [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Quart-Temps"),
                          createVNode("th", { class: "px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Points"),
                          createVNode("th", { class: "px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Rebonds"),
                          createVNode("th", { class: "px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Passes"),
                          createVNode("th", { class: "px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Interceptions"),
                          createVNode("th", { class: "px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Pertes de balle"),
                          createVNode("th", { class: "px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Fautes")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList($setup.periodStats, (stats) => {
                          return (openBlock(), createBlock("tr", {
                            key: stats.period
                          }, [
                            createVNode("td", { class: "px-3 py-3 border-b border-gray-200 bg-white text-sm" }, toDisplayString(stats.period), 1),
                            createVNode("td", { class: "px-3 py-3 border-b border-gray-200 bg-white text-sm" }, toDisplayString(stats.points), 1),
                            createVNode("td", { class: "px-3 py-3 border-b border-gray-200 bg-white text-sm" }, toDisplayString(stats.rebounds), 1),
                            createVNode("td", { class: "px-3 py-3 border-b border-gray-200 bg-white text-sm" }, toDisplayString(stats.assists), 1),
                            createVNode("td", { class: "px-3 py-3 border-b border-gray-200 bg-white text-sm" }, toDisplayString(stats.steals), 1),
                            createVNode("td", { class: "px-3 py-3 border-b border-gray-200 bg-white text-sm" }, toDisplayString(stats.turnovers), 1),
                            createVNode("td", { class: "px-3 py-3 border-b border-gray-200 bg-white text-sm" }, toDisplayString(stats.fouls), 1)
                          ]))
                        }), 128))
                      ])
                    ])
                  ]))
                : (openBlock(), createBlock("div", {
                    key: 3,
                    class: "text-center py-4"
                  }, [
                    createVNode("p", { class: "text-gray-500" }, "Aucune statistique par quart-temps disponible pour ce match.")
                  ]))
        ]
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/MatchPeriodStatsModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const MatchPeriodStatsModal = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const _sfc_main = {
  __name: 'PlayerProfile',
  props: {
  userId: {
    type: [String, Number],
    required: true,
  },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const { fetchApi } = useApi();
const user = ref(null);
const isLoading = ref(true);
const error = ref(null);

const showPeriodStatsModal = ref(false);
const selectedEncounterId = ref(null);

const fetchUser = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi(`/users/${props.userId}`);
    user.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

const sortedIndividualStats = computed(() => {
  if (!user.value || !user.value.individual_stats) return [];
  return [...user.value.individual_stats].sort((a, b) => {
    return new Date(a.encounter.happens_at) - new Date(b.encounter.happens_at);
  });
});

const openPeriodStatsModal = (encounterId) => {
  selectedEncounterId.value = encounterId;
  showPeriodStatsModal.value = true;
};

const closePeriodStatsModal = () => {
  showPeriodStatsModal.value = false;
  selectedEncounterId.value = null;
};

onMounted(fetchUser);

const __returned__ = { props, fetchApi, user, isLoading, error, showPeriodStatsModal, selectedEncounterId, fetchUser, sortedIndividualStats, openPeriodStatsModal, closePeriodStatsModal, ref, onMounted, computed, get useApi() { return useApi }, PlayerStatsDashboard, MatchPeriodStatsModal };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($setup.isLoading) {
    _push(`<div class="text-center py-8"><p class="text-gray-500">Chargement du profil...</p></div>`);
  } else if ($setup.error) {
    _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg"><p class="font-bold">Erreur:</p><p>${ssrInterpolate($setup.error)}</p></div>`);
  } else if ($setup.user) {
    _push(`<div class="space-y-8"><div><h1 class="text-3xl font-bold text-gray-900">${
      ssrInterpolate($setup.user.firstname)
    } ${
      ssrInterpolate($setup.user.lastname)
    }</h1><p class="text-gray-600">Licence: ${
      ssrInterpolate($setup.user.licence_number)
    }</p></div><hr>`);
    _push(ssrRenderComponent($setup["PlayerStatsDashboard"], { "user-id": $props.userId }, null, _parent));
    _push(`<hr><div><h3 class="text-xl font-semibold text-gray-900 mb-4">Historique des Matchs</h3>`);
    if ($setup.user.individual_stats && $setup.user.individual_stats.length) {
      _push(`<div class="bg-white shadow-md rounded-lg overflow-hidden"><table class="min-w-full leading-normal"><thead><tr><th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th><th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Adversaire</th><th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Score</th><th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Résultat</th><th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th></tr></thead><tbody><!--[-->`);
      ssrRenderList($setup.sortedIndividualStats, (stat) => {
        _push(`<tr><td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">${
          ssrInterpolate(new Date(stat.encounter.happens_at).toLocaleDateString('fr-FR'))
        }</td><td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">${
          ssrInterpolate(stat.encounter.opponent)
        }</td><td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">${
          ssrInterpolate(stat.encounter.team_score)
        } - ${
          ssrInterpolate(stat.encounter.opponent_score)
        }</td><td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">`);
        if (stat.encounter.is_victory === true) {
          _push(`<span class="text-green-600 font-semibold">Victoire</span>`);
        } else if (stat.encounter.is_victory === false) {
          _push(`<span class="text-red-600 font-semibold">Défaite</span>`);
        } else {
          _push(`<span class="text-gray-500">N/A</span>`);
        }
        _push(`</td><td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"><button class="text-blue-600 hover:text-blue-900 font-bold">Détails</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    } else {
      _push(`<div class="text-center py-4 text-gray-500"> Aucun historique de match disponible pour ce joueur. </div>`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent($setup["MatchPeriodStatsModal"], {
    show: $setup.showPeriodStatsModal,
    "user-id": $props.userId,
    "encounter-id": $setup.selectedEncounterId,
    onClose: $setup.closePeriodStatsModal
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/PlayerProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const PlayerProfile = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Profil du Joueur" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PlayerProfile", PlayerProfile, { "userId": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/manage/PlayerProfile.vue", "client:component-export": "default" })} ` })}`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/manage/players/[id].astro", void 0);

const $$file = "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/manage/players/[id].astro";
const $$url = "/manage/players/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

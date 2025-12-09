/* empty css                                                 */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_BAntvzzV.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_B1aUlrCE.mjs';
import { useSSRContext, ref, onMounted, mergeProps } from 'vue';
import { u as useApi } from '../../../chunks/useApi_BbvW2iJx.mjs';
import { T as TeamStatsDashboard } from '../../../chunks/TeamStatsDashboard_By8pvC0M.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../../chunks/_plugin-vue_export-helper_ceIx8-CJ.mjs';
export { renderers } from '../../../renderers.mjs';

const _sfc_main = {
  __name: 'TeamProfile',
  props: {
  teamId: {
    type: [String, Number],
    required: true,
  },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const { fetchApi } = useApi();
const team = ref(null);
const isLoading = ref(true);
const error = ref(null);

const fetchTeam = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi(`/teams/${props.teamId}`);
    team.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchTeam);

const __returned__ = { props, fetchApi, team, isLoading, error, fetchTeam, ref, onMounted, get useApi() { return useApi }, TeamStatsDashboard };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.isLoading) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center py-8" }, _attrs))}><p class="text-gray-500">Chargement du profil de l&#39;équipe...</p></div>`);
  } else if ($setup.error) {
    _push(`<div${
      ssrRenderAttrs(mergeProps({ class: "bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg" }, _attrs))
    }><p class="font-bold">Erreur:</p><p>${
      ssrInterpolate($setup.error)
    }</p></div>`);
  } else if ($setup.team) {
    _push(`<div${
      ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))
    }><div><h1 class="text-3xl font-bold text-gray-900">${
      ssrInterpolate($setup.team.name)
    }</h1><p class="text-gray-600">Saison: ${
      ssrInterpolate($setup.team.season.name)
    } | Catégorie: ${
      ssrInterpolate($setup.team.category.name)
    }</p></div><hr>`);
    _push(ssrRenderComponent($setup["TeamStatsDashboard"], { "team-id": $props.teamId }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/manage/TeamProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const TeamProfile = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Profil de l'\xC9quipe" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamProfile", TeamProfile, { "teamId": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/manage/TeamProfile.vue", "client:component-export": "default" })} ` })}`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/manage/teams/[id].astro", void 0);

const $$file = "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/manage/teams/[id].astro";
const $$url = "/manage/teams/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

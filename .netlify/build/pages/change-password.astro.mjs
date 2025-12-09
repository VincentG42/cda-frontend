/* empty css                                           */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BAntvzzV.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BODWYcB2.mjs';
import { defineComponent, useSSRContext, ref, mergeProps, withCtx, createVNode, createBlock, openBlock } from 'vue';
import { ErrorMessage, Field, Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { u as useApi } from '../chunks/useApi_BbvW2iJx.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_ceIx8-CJ.mjs';
export { renderers } from '../renderers.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChangePasswordForm",
  setup(__props, { expose: __expose }) {
    __expose();
    const { fetchApi } = useApi();
    const error = ref(null);
    const validationSchema = toTypedSchema(
      z.object({
        current_password: z.string().min(1, "Le mot de passe actuel est requis"),
        new_password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
        new_password_confirmation: z.string()
      }).refine((data) => data.new_password === data.new_password_confirmation, {
        message: "Les mots de passe ne correspondent pas",
        path: ["new_password_confirmation"]
      })
    );
    const handleSubmit = async (values) => {
      error.value = null;
      try {
        await fetchApi("auth/change-password", {
          method: "POST",
          body: JSON.stringify({
            current_password: values.current_password,
            new_password: values.new_password,
            new_password_confirmation: values.new_password_confirmation
          })
        });
        window.location.href = "/dashboard";
      } catch (e) {
        error.value = e.message || "Une erreur est survenue lors du changement de mot de passe.";
      }
    };
    const __returned__ = { fetchApi, error, validationSchema, handleSubmit, get Form() {
      return Form;
    }, get Field() {
      return Field;
    }, get ErrorMessage() {
      return ErrorMessage;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-md" }, _attrs))}><div class="text-center mb-8"><h1 class="text-2xl font-bold text-gray-900 mb-2"> Changement de mot de passe requis </h1><p class="text-gray-600"> Pour votre sécurité, vous devez changer votre mot de passe lors de votre première connexion. </p></div><div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">`);
  if ($setup.error) {
    _push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert"><strong class="font-bold">Erreur:</strong><span class="block sm:inline">${ssrInterpolate($setup.error)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent($setup["Form"], {
    onSubmit: $setup.handleSubmit,
    "validation-schema": $setup.validationSchema,
    class: "space-y-6"
  }, {
    default: withCtx(({ isSubmitting }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><label for="current_password" class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}> Mot de passe actuel (temporaire) </label>`);
        _push2(ssrRenderComponent($setup["Field"], {
          name: "current_password",
          type: "password",
          id: "current_password",
          class: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["ErrorMessage"], {
          name: "current_password",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent2, _scopeId));
        _push2(`</div><div${_scopeId}><label for="new_password" class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}> Nouveau mot de passe </label>`);
        _push2(ssrRenderComponent($setup["Field"], {
          name: "new_password",
          type: "password",
          id: "new_password",
          class: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["ErrorMessage"], {
          name: "new_password",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent2, _scopeId));
        _push2(`</div><div${_scopeId}><label for="new_password_confirmation" class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}> Confirmer le nouveau mot de passe </label>`);
        _push2(ssrRenderComponent($setup["Field"], {
          name: "new_password_confirmation",
          type: "password",
          id: "new_password_confirmation",
          class: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["ErrorMessage"], {
          name: "new_password_confirmation",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent2, _scopeId));
        _push2(`</div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting) ? " disabled" : ""} class="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg"${_scopeId}>`);
        if (isSubmitting) {
          _push2(`<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"${_scopeId}></div>`);
        } else {
          _push2(`<span${_scopeId}>Changer le mot de passe</span>`);
        }
        _push2(`</button>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("label", {
              for: "current_password",
              class: "block text-sm font-medium text-gray-700 mb-2"
            }, " Mot de passe actuel (temporaire) "),
            createVNode($setup["Field"], {
              name: "current_password",
              type: "password",
              id: "current_password",
              class: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            }),
            createVNode($setup["ErrorMessage"], {
              name: "current_password",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "new_password",
              class: "block text-sm font-medium text-gray-700 mb-2"
            }, " Nouveau mot de passe "),
            createVNode($setup["Field"], {
              name: "new_password",
              type: "password",
              id: "new_password",
              class: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            }),
            createVNode($setup["ErrorMessage"], {
              name: "new_password",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "new_password_confirmation",
              class: "block text-sm font-medium text-gray-700 mb-2"
            }, " Confirmer le nouveau mot de passe "),
            createVNode($setup["Field"], {
              name: "new_password_confirmation",
              type: "password",
              id: "new_password_confirmation",
              class: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            }),
            createVNode($setup["ErrorMessage"], {
              name: "new_password_confirmation",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("button", {
            type: "submit",
            disabled: isSubmitting,
            class: "w-full flex items-center justify-center space-x-2 py-3 px-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg"
          }, [
            isSubmitting ? (openBlock(), createBlock("div", {
              key: 0,
              class: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
            })) : (openBlock(), createBlock("span", { key: 1 }, "Changer le mot de passe"))
          ], 8, ["disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/auth/ChangePasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChangePasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$ChangePassword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Changer de mot de passe" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ChangePasswordForm", ChangePasswordForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/auth/ChangePasswordForm.vue", "client:component-export": "default" })} </main> ` })}`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/change-password.astro", void 0);

const $$file = "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/change-password.astro";
const $$url = "/change-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ChangePassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

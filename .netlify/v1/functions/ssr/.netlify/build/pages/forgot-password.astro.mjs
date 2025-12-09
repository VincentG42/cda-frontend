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
  __name: "ForgotPasswordForm",
  setup(__props, { expose: __expose }) {
    __expose();
    const { fetchApi } = useApi();
    const message = ref(null);
    const error = ref(null);
    const validationSchema = toTypedSchema(
      z.object({
        email: z.string().email("Email invalide").min(1, "L'email est requis")
      })
    );
    const handleSubmit = async (values) => {
      message.value = null;
      error.value = null;
      try {
        await fetchApi("forgot-password", {
          method: "POST",
          body: JSON.stringify({ email: values.email })
        });
        message.value = "Si un compte existe avec cet email, vous recevrez un lien de réinitialisation.";
      } catch (e) {
        error.value = e.message || "Une erreur est survenue.";
      }
    };
    const __returned__ = { fetchApi, message, error, validationSchema, handleSubmit, get Form() {
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-md" }, _attrs))}><div class="text-center mb-8"><h1 class="text-2xl font-bold text-gray-900 mb-2"> Mot de passe oublié ? </h1><p class="text-gray-600"> Entrez votre email pour recevoir un lien de réinitialisation. </p></div><div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">`);
  if ($setup.message) {
    _push(`<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert"><span class="block sm:inline">${ssrInterpolate($setup.message)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
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
        _push2(`<div${_scopeId}><label for="email" class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}> Email </label>`);
        _push2(ssrRenderComponent($setup["Field"], {
          name: "email",
          type: "email",
          id: "email",
          class: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent",
          placeholder: "votre@email.com"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["ErrorMessage"], {
          name: "email",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent2, _scopeId));
        _push2(`</div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting) ? " disabled" : ""} class="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg"${_scopeId}>`);
        if (isSubmitting) {
          _push2(`<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"${_scopeId}></div>`);
        } else {
          _push2(`<span${_scopeId}>Envoyer le lien</span>`);
        }
        _push2(`</button>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("label", {
              for: "email",
              class: "block text-sm font-medium text-gray-700 mb-2"
            }, " Email "),
            createVNode($setup["Field"], {
              name: "email",
              type: "email",
              id: "email",
              class: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent",
              placeholder: "votre@email.com"
            }),
            createVNode($setup["ErrorMessage"], {
              name: "email",
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
            })) : (openBlock(), createBlock("span", { key: 1 }, "Envoyer le lien"))
          ], 8, ["disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="mt-6 text-center"><a href="/" class="text-sm text-green-600 hover:text-green-500 font-medium"> Retour à la connexion </a></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/auth/ForgotPasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ForgotPasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$ForgotPassword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mot de passe oubli\xE9" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ForgotPasswordForm", ForgotPasswordForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/auth/ForgotPasswordForm.vue", "client:component-export": "default" })} </main> ` })}`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/forgot-password.astro", void 0);

const $$file = "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

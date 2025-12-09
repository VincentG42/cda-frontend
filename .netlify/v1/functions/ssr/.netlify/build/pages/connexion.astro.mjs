/* empty css                                           */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BAntvzzV.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BODWYcB2.mjs';
import { $ as $$NavigationBar, a as $$Footer } from '../chunks/Footer_C5vmlRDn.mjs';
import { defineComponent, useSSRContext, ref, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment } from 'vue';
import { u as useAuthStore, _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_ceIx8-CJ.mjs';
import { ErrorMessage, Field, Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { l as loginSchema } from '../chunks/index_CCeK9fKT.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
export { renderers } from '../renderers.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  setup(__props, { expose: __expose }) {
    __expose();
    const authStore = useAuthStore();
    const showPassword = ref(false);
    const error = ref(null);
    const validationSchema = toTypedSchema(loginSchema);
    const handleSubmit = async (values) => {
      error.value = null;
      try {
        const response = await authStore.login({
          email: values.email,
          password: values.password
        });
        if (response && response.require_password_change) {
          window.location.href = "/change-password";
          return;
        }
        const user = authStore.user;
        if (user) {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/";
        }
      } catch (e) {
        error.value = e.message || "Email ou mot de passe incorrect.";
      }
    };
    const __returned__ = { authStore, showPassword, error, validationSchema, handleSubmit, get Form() {
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-md" }, _attrs))}><div class="text-center mb-8"><div class="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"><div class="w-16 h-16 bg-primary rounded-xl flex items-center justify-center filter brightness-90"><span class="text-white font-bold text-2xl">CC</span></div></div><h1 class="text-2xl font-bold text-gray-900 mb-2"> CCSLR Saint Joseph </h1><p class="text-gray-600"> Espace licencié </p></div><div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"><div class="mb-6"><h2 class="text-xl font-semibold text-gray-900 mb-2"> Connexion </h2><p class="text-sm text-gray-600">Accédez à votre espace joueur</p></div>`);
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
        _push2(`<div${_scopeId}><label for="email" class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}> Email </label><div class="relative"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"${_scopeId}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"${_scopeId}></path><circle cx="12" cy="7" r="4"${_scopeId}></circle></svg>`);
        _push2(ssrRenderComponent($setup["Field"], {
          name: "email",
          type: "email",
          id: "email",
          class: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white",
          placeholder: "Entrez votre email"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent($setup["ErrorMessage"], {
          name: "email",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent2, _scopeId));
        _push2(`</div><div${_scopeId}><label for="password" class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}> Mot de passe </label><div class="relative"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"${_scopeId}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"${_scopeId}></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"${_scopeId}></path></svg>`);
        _push2(ssrRenderComponent($setup["Field"], {
          name: "password",
          type: $setup.showPassword ? "text" : "password",
          id: "password",
          class: "w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white",
          placeholder: "Entrez votre mot de passe"
        }, null, _parent2, _scopeId));
        _push2(`<button type="button" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"${_scopeId}>`);
        if (!$setup.showPassword) {
          _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"${_scopeId}></path><circle cx="12" cy="12" r="3"${_scopeId}></circle></svg>`);
        } else {
          _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"${_scopeId}></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"${_scopeId}></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"${_scopeId}></path><line x1="2" x2="22" y1="2" y2="22"${_scopeId}></line></svg>`);
        }
        _push2(`</button></div>`);
        _push2(ssrRenderComponent($setup["ErrorMessage"], {
          name: "password",
          class: "text-red-500 text-xs mt-1"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="text-right"${_scopeId}><a href="/forgot-password" class="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200"${_scopeId}> Mot de passe oublié ? </a></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting) ? " disabled" : ""} class="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-primary hover:bg-primary/80 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"${_scopeId}>`);
        if (isSubmitting) {
          _push2(`<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"${_scopeId}></div>`);
        } else {
          _push2(`<!--[--><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"${_scopeId}></path><polyline points="10 17 15 12 10 7"${_scopeId}></polyline><line x1="15" x2="3" y1="12" y2="12"${_scopeId}></line></svg><span${_scopeId}>Se connecter</span><!--]-->`);
        }
        _push2(`</button>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("label", {
              for: "email",
              class: "block text-sm font-medium text-gray-700 mb-2"
            }, " Email "),
            createVNode("div", { class: "relative" }, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                class: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              }, [
                createVNode("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
                createVNode("circle", {
                  cx: "12",
                  cy: "7",
                  r: "4"
                })
              ])),
              createVNode($setup["Field"], {
                name: "email",
                type: "email",
                id: "email",
                class: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white",
                placeholder: "Entrez votre email"
              })
            ]),
            createVNode($setup["ErrorMessage"], {
              name: "email",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", null, [
            createVNode("label", {
              for: "password",
              class: "block text-sm font-medium text-gray-700 mb-2"
            }, " Mot de passe "),
            createVNode("div", { class: "relative" }, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                class: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              }, [
                createVNode("rect", {
                  width: "18",
                  height: "11",
                  x: "3",
                  y: "11",
                  rx: "2",
                  ry: "2"
                }),
                createVNode("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
              ])),
              createVNode($setup["Field"], {
                name: "password",
                type: $setup.showPassword ? "text" : "password",
                id: "password",
                class: "w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white",
                placeholder: "Entrez votre mot de passe"
              }, null, 8, ["type"]),
              createVNode("button", {
                type: "button",
                onClick: ($event) => $setup.showPassword = !$setup.showPassword,
                class: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              }, [
                !$setup.showPassword ? (openBlock(), createBlock("svg", {
                  key: 0,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
                  createVNode("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                  })
                ])) : (openBlock(), createBlock("svg", {
                  key: 1,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24" }),
                  createVNode("path", { d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" }),
                  createVNode("path", { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" }),
                  createVNode("line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                  })
                ]))
              ], 8, ["onClick"])
            ]),
            createVNode($setup["ErrorMessage"], {
              name: "password",
              class: "text-red-500 text-xs mt-1"
            })
          ]),
          createVNode("div", { class: "text-right" }, [
            createVNode("a", {
              href: "/forgot-password",
              class: "text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200"
            }, " Mot de passe oublié ? ")
          ]),
          createVNode("button", {
            type: "submit",
            disabled: isSubmitting,
            class: "w-full flex items-center justify-center space-x-2 py-3 px-4 bg-primary hover:bg-primary/80 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          }, [
            isSubmitting ? (openBlock(), createBlock("div", {
              key: 0,
              class: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
            })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
                createVNode("polyline", { points: "10 17 15 12 10 7" }),
                createVNode("line", {
                  x1: "15",
                  x2: "3",
                  y1: "12",
                  y2: "12"
                })
              ])),
              createVNode("span", null, "Se connecter")
            ], 64))
          ], 8, ["disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="mt-6 pt-6 border-t border-gray-200 text-center"><p class="text-xs text-gray-500">Accès réservé aux licenciés du club</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/connexion/LoginForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoginForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Connexion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Connexion - CCSLR St Joseph" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 min-h-screen flex flex-col"> ${renderComponent($$result2, "NavigationBar", $$NavigationBar, {})} <main class="flex-grow flex items-center justify-center py-20 md:py-32"> ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/components/connexion/LoginForm.vue", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/connexion.astro", void 0);

const $$file = "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/pages/connexion.astro";
const $$url = "/connexion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Connexion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

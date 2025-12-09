import { c as createComponent, a as createAstro, b as addAttribute, e as renderHead, f as renderSlot, r as renderTemplate, d as renderComponent } from './astro/server_BAntvzzV.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="text-neutral-primary"> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro();
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };

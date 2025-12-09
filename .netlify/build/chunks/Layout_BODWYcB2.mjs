import { c as createComponent, a as createAstro, b as addAttribute, f as renderSlot, e as renderHead, r as renderTemplate } from './astro/server_BAntvzzV.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                   */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, image = "/images/basket-club-og.jpg" } = Astro2.props;
  const description = "Site du club de basket CCSLR St Joseph";
  const permalink = Astro2.url.href;
  const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 7) {
      r = parseInt(hex.substring(1, 3), 16);
      g = parseInt(hex.substring(3, 5), 16);
      b = parseInt(hex.substring(5, 7), 16);
    }
    return `${r} ${g} ${b}`;
  };
  hexToRgb("#374151");
  hexToRgb("#F9FAFB");
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(permalink, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(permalink, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>${renderSlot($$result, $$slots["head"])}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"><style>
			:root {
				--color-neutral-primary: \${neutralPrimaryColorRgb};
				--color-neutral-accent: \${neutralAccentColorRgb};
			}
		</style>${renderHead()}</head> <body class="bg-neutral-accent text-neutral-primary"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/vincent/Documents/projet-cda/frontend-basketclub-app/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [vue({ appEntrypoint: '/src/plugins/pinia.js' })],

  vite: {
    plugins: [tailwindcss()]
  }
});
// @ts-check
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",                // <- importante en Netlify
  integrations: [vue()],
  vite: { plugins: [tailwindcss()] },
});

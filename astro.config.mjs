import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tiramify.dev",
  experimental: {
    assets: true,
  },
  integrations: [
    sitemap(),
    tailwind({
      config: {
        path: "./tailwind.config.cjs",
      },
    }),
  ],
});

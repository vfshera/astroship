import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";

export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", fr: "fr", de: "de" },
      },
    }),
    astroI18next(),
  ],
});

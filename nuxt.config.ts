// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nuxt3-i18n-ssg",
  },
  modules: ["@nuxtjs/i18n", "@nuxt/content"],
  i18n: {
    locales: [
      { code: "ja", iso: "ja_JP", file: "ja.js" },
      { code: "en", iso: "en-US", file: "en.js" },
    ],
    langDir: "locales/",
    defaultLocale: "ja", // default locale of your project for Nuxt pages and routings
  },
  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: "nuxt-link-active",
        trailingSlash: "append",
      },
    },
  },
});

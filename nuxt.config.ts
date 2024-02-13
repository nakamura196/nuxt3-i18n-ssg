// https://nuxt.com/docs/api/configuration/nuxt-config

const defaultLang = "ja";
const baseURL = "/nuxt3-i18n-ssg";

export default defineNuxtConfig({
  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: defaultLang,
      },
      title: "Nuxt3 i18n SSG",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Nuxt 3 & i18n & content Example",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: `${baseURL}/favicon.ico` },
      ],
    },
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
  typescript: {
    shim: false, // shimsファイル生成の無効化（VSCodeでVolarを使う場合はfalseにする）
    strict: true, // 型チェックを厳格化
    typeCheck: true, // nuxt devまたはnuxt build時に型チェックを実行
  },
});

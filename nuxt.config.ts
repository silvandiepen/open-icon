import dynamicImport from "vite-plugin-dynamic-import";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-bemm", "@nuxt/content"],
  components: [
    { path: "~/components" },
    { path: "~/components/layout" },
    { path: "~/components/section" },
    { path: "~/components/control" },
  ],
  vite: {
    build: {
      target: "esnext",
    },
    plugins: [dynamicImport()],
  },
});

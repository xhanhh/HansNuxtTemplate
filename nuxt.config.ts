// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['@/styles/tailwind.css', '@/styles/global.scss'],
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@nuxt/scripts'
  ],

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800],
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        'dayjs', // CJS
        'dayjs/plugin/relativeTime', // CJS
        'dayjs/plugin/updateLocale', // CJS
        'dayjs/plugin/utc', // CJS
      ]
    }
  }

})
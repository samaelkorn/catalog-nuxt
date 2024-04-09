// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    'nuxt-primevue'
  ],
  primevue: {
    components: {
      include: '*',
    }
  },
  css: ['primevue/resources/themes/lara-light-blue/theme.css', '~/assets/css/main.css', 'primeflex/primeflex.css'],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: ['/admin'],
      exclude: undefined,
      cookieRedirect: false,
    }
  }
})

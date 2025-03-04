// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Chá da Venus',
      htmlAttrs: {
        lang: 'pt'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  imports: {
    autoImport: true
  },
})
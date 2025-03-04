// https://nuxt.com/docs/api/configuration/nuxt-config
// Configuração básica do Nuxt
export default defineNuxtConfig({
  // Use ssr: true para renderização no servidor
  ssr: true,
  
  // Módulos necessários
  modules: [
    '@nuxt/icon',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  
  // Configurações de CSS global
  css: [
    // Seus arquivos CSS globais
  ],
  
  // Configuração de app
  app: {
    head: {
      title: 'Site Venus',
      htmlAttrs: {
        lang: 'pt'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        // Seus links, como fontes etc.
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
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
  // Configuração do Nitro (servidor)
  nitro: {
    // Adicione esta linha para solucionar problemas de inicialização
    preset: 'node-server'
  }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css', '~/assets/global.css', '~/assets/flickity/dist/flickity.min.css', '@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [['@storyblok/nuxt', { accessToken: 'RbDFPddzRlJ3FzSDSKY9rgtt' }]],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
  head: {
    bodyAttrs: {
      class: 'fade-in',
    },
    link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/byd1adg.css' }, { rel: 'icon', href: 'media/favicon.png' }]
  }
},
})
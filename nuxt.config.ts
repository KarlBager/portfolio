// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css', '~/assets/global.css', '~/assets/flickity/dist/flickity.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ['@storyblok/nuxt', { accessToken: 'RbDFPddzRlJ3FzSDSKY9rgtt' }],
    '@nuxtjs/tailwindcss',
    "@nuxt/image"
  ],
  app: {
  head: {
    title: 'Karl Bager Portfolio',
    bodyAttrs: {
      class: 'fade-in',
    },
    link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/byd1adg.css' }, { rel: 'icon', href: 'https://www.media.karlbager.dk/media/favicon.png' }]
  }
},
})
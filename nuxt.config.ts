// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  image: {
    provider: 'ipx',
    domains: ['media.karlbager.dk', 'karlbager.dk']
  },
  generate: {
    fallback: '404.html'
  },
  devtools: { enabled: true },
  css: ['~/assets/main.css', '~/assets/global.css', '~/assets/flickity/dist/flickity.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    "nuxt-easy-lightbox"
  ],
  app: {
  head: {
    title: 'Karl Bager Portfolio',
    meta: [{
      name: 'google-site-verification',
      content: 'EJqIOGhmaUOcCTX8CR2l_HbAc-n74lEg9kmg3BcM6w4'
    }],
    bodyAttrs: {
      class: 'fade-in',
    },
    link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/byd1adg.css' }, { rel: 'icon', href: 'https://www.media.karlbager.dk/media/favicon.png' }]
  }
},
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css', '~/assets/global.css', 'flickity/dist/flickity.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [['@storyblok/nuxt', { accessToken: 'RbDFPddzRlJ3FzSDSKY9rgtt' }]],
app: {
  head: {
    bodyAttrs: {
      class: 'fade-in',
    },
    link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/byd1adg.css' }, { rel: 'icon', href: 'media/favicon.png' }]
  }
},
build: {
  rollupOptions: {
    external: [
      'flickity', // Add Flickity here to treat it as an external dependency
    ]
  }
}
})
import data from './static/storedata.json'
let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `product/${el.id}`))
  })
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    script: [{ src: 'https://js.stripe.com/v3/' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [`~/plugins/currency-filter.js`],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

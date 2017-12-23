// Add routerBase for GH Pages deployment
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/2017-christmas-card/' : '/'

module.exports = {
  router: {
    base: routerBase
  },
  css: [
    '~/assets/app.css'
  ],
  head: {
    title: '2017 Christmas Card',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '2017 Christmas Card' },
      { name: 'apple-mobile-web-app-title', content: '2017 Card' },
      { name: 'application-name', content: '2017 Card' },
      { name: 'theme-color', content: '#0f0b0e' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bungee' },
      { rel: 'icon', type: 'image/x-icon', href: `${routerBase}favicon.ico` },
      { rel: 'apple-touch-icon', sizes: '180x180', href: `${routerBase}apple-touch-icon.png` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${routerBase}favicon-32x32.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${routerBase}favicon-16x16.png` },
      { rel: 'manifest', href: `${routerBase}manifest.json` },
      { rel: 'mask-icon', href: `${routerBase}safari-pinned-tab.svg`, color: '#0f0b0e' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    postcss: [
      require('postcss-import')(),
      require('postcss-cssnext')({
        warnForDuplicates: false
      }),
      require('cssnano')()
    ],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: function (modulePath) {
          return /node_modules/.test(modulePath) &&
            !/node_modules\/no-ssr/.test(modulePath)
        },
        options: Object.assign({}, this.babelOptions)
      })
    }
  }
}

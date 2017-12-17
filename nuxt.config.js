// Add routerBase for GH Pages deployment
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/2017-christmas-card/'
  }
} : {}

module.exports = {
  ...routerBase,
  css: [
    '~/assets/app.css'
  ],
  head: {
    title: '2017 Christmas Card',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '2017 Christmas Card' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    postcss: [
      require('postcss-import')(),
      require('postcss-cssnext')(),
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

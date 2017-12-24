const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/2017-christmas-card/' : '/'
const sharingURL = `https://awayken.github.io/2017-christmas-card/`
const title = `ESCAPE from the MAZE PLANET`
const shortTitle = `ESCAPE`
const description = `The Miles Rausch Family has completed another stellar year, and we're celebrating it with this text adventure story. Young or old, choose your own adventure with Kiddo & Sweets. Learn more about our 2017 as you try to escape the maze planet, Skoor!`

module.exports = {
  router: {
    base: routerBase
  },
  css: [
    '~/assets/app.css'
  ],
  head: {
    title: `${title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `${description}` },
      { name: 'apple-mobile-web-app-title', content: `${shortTitle}` },
      { name: 'application-name', content: `${shortTitle}` },
      { name: 'theme-color', content: '#0f0b0e' },
      { property: 'og:url', content: `${sharingURL}` },
      { property: 'og:title', content: `${title}` },
      { property: 'og:description', content: `${description}` },
      { property: 'og:image', content: `${sharingURL}social-media.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@awayken' }
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
  loading: { color: '#0f0b0e' },
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

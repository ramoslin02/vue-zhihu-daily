// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/vue-zhihu-daily/dist/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as Surge or Netlify
    // already gzip all static assets for you. Before setting to `true`, make sure
    // to: npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: [
      'js', 'css'
    ],
    // Run the build command with an extra argument to View the bundle analyzer
    // report after build finishes: `npm run build --report` Set to `true` or
    // `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8088,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/news/latest': {
        target: 'http://news-at.zhihu.com/api/4',
        changeOrigin: true,
        pathRewrite: {
          '^/news/latest': '/news/latest'
        }
      },
      '/news': {
        target: 'http://news-at.zhihu.com/api/4',
        changeOrigin: true,
        pathRewrite: {
          '^/news': '/news'
        }
      },
      '/story-extra': {
        target: 'http://news-at.zhihu.com/api/4',
        changeOrigin: true,
        pathRewrite: {
          '^/story-extra': '/story-extra'
        }
      },
      '/news/before': {
        target: 'http://news-at.zhihu.com/api/4',
        changeOrigin: true,
        pathRewrite: {
          '^/news/before': '/news/before'
        }
      },
      '/story': {
        target: 'http://news-at.zhihu.com/api/4',
        changeOrigin: true,
        pathRewrite: {
          '^/story': '/story'
        }
      },
      '/themes': {
        target: 'http://news-at.zhihu.com/api/4',
        changeOrigin: true,
        pathRewrite: {
          '^/themes': '/themes'
        }
      },
      '/theme': {
        target: 'http://news-at.zhihu.com/api/4',
        changeOrigin: true,
        pathRewrite: {
          '^/theme': '/theme'
        }
      },
      '/editor': {
        target: 'http://news-at.zhihu.com/api/4',
        changeOrigin: true,
        pathRewrite: {
          '^/editor': '/editor'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy" with this
    // option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps) In our experience, they
    // generally work as expected, just be aware of this issue when enabling this
    // option.
    cssSourceMap: false
  }
}

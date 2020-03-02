const withPWA = require('next-pwa')

module.exports = withPWA({
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: 'public'
  }
})
/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");

module.exports = withPWA({
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: "public",
    disable: true,
  },
});

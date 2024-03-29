/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    // https://stackoverflow.com/questions/51791163/warning-prop-classname-did-not-match-when-using-styled-components-with-seman
    styledComponents: true,
  },
}

module.exports = nextConfig

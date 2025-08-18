// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ebac-agenda-contatos-tan.vercel.app',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 10000,
    video: false
  }
})

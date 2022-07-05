import { defineConfig } from 'cypress'

export default defineConfig({
  includeShadowDom: true,
  type:"module",
  pageLoadTimeout: 120000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on: any, config: any) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:4200',
    specPattern: './cypress/e2e/**/*.cy.{mjs,js,jsx,ts,tsx}',
  },
})

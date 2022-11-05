const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fbtgi5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "http://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    viewportHeight: 1000,
    viewportWidth: 1000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,

    env:{
      DEV: "http://www.webdriveruniversity.com",
      QA: "https://automationteststore.com/",
      STG: "Staging Environment",
      PROD: "Production Environment"
    }
  },
});

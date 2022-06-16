const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    defaultCommandTimeout: 30000,
    projectId: "<projectId>",
    chromeWebSecurity: false,
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    username:"standard_user",
    password:"secret_sauce"
  }
});

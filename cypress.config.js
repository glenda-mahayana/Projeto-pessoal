const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env:{
      requestMode: true
    }
  },
});

/*module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://automationexercise.com/", //"https://automationexercise.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
*/
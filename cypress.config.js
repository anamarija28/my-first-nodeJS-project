// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/*.spec.js', // Point to the integration folder
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },

  baseUrl:"https://kiibankweb.moneyfex.net"
  // https://kiibankweb.moneyfex.net/login,

  },
});
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   baseUrl: "https://kiibankweb.moneyfex.net",

//   // Other configurations go here...
//   // If you have additional configuration options, they should be within the `config` object.
//   // For example:
//   // config: {
//   //   // Additional configurations...
//   // },
//   // Node event listeners can be implemented within the `on` callback.
//   // setupNodeEvents(on, config) {
//   //   // implement node event listeners here
//   // },
//   supportFile: "cypress/support/commands.js",

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

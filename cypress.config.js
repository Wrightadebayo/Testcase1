const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // You can add event listeners here if needed
    },
    video: true, // ✅ Record videos of test runs
    screenshotOnRunFailure: true, // ✅ Take screenshot if test fails
  },
});

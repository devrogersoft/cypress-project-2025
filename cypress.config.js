const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports", // Store only reports, no videos
    overwrite: true,
    html: true, //HTML report will be generated
    json: false,
    charts: true,
    embeddedScreenshots: true,  // Screenshots will be linked, not copied
    inlineAssets: true,         // Prevent duplication of assets
    noVideo: true,              //  Prevent videos from being included in the report
  },
  e2e: {
    experimentalStudio: true,
    video: true, // Cypress will save videos normally
    videosFolder: "cypress/reports/videos", // Videos will ONLY be stored here
    screenshotsFolder: "cypress/reports/screenshots", // Screenshots will ONLY be stored here
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);


    },
  },
});

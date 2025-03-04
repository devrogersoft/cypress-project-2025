const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // HTML report
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,  // Ensure screenshots are linked in the report without copying
    inlineAssets: true,         // Prevent external folders from duplicating inside the report
    // Disable video embedding in reports
    noVideos: true,                 // Prevent copying of video files into reports
  },
  e2e: {
    experimentalStudio: true,
    video: true,
    videosFolder: "cypress/videos", // Keep videos in original location
    screenshotsFolder: "cypress/screenshots", // Keep screenshots in original location
    // screenshotOnRunFailure: true,
    // trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});

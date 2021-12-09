const { SpecReporter } = require('jasmine-spec-reporter');
const path = require('path');
const PrettyReporter = require('protractor-pretty-html-reporter');

const prettyReporter = new PrettyReporter({
    path: path.join(__dirname, 'results'),
    screenshotsOnPassed: true,
    highlightSuspectLine: true,
    showBrowser: true,
    writeReportEachSpec: true
});

// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['example_spec.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },

    onPrepare: function (params) {
        jasmine.getEnv().addReporter(prettyReporter);
    },
    beforeLaunch() {
        prettyReporter.startReporter();
    }
};
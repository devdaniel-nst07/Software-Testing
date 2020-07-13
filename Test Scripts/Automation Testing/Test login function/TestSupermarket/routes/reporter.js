var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: process.argv[2],
    output: process.argv[3],
    launchReport: true,
    metadata: {
        "App Version": "v1",
        "Test Environment": "STAGING",
        "Browser": "Firefox  57.0",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};
reporter.generate(options);

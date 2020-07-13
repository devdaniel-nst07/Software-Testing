var {defineSupportCode} = require('cucumber');
var Cucumber = require('cucumber');

defineSupportCode(function({After}) {
    After(function(scenario) {
        var driver = this.driver;
        var world = this;
        return driver.takeScreenshot().then(function(screenShot) {
            // screenShot is a base-64 encoded PNG
            world.attach(screenShot, 'image/png');
            return driver.quit();
        });
    });
});
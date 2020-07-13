require('geckodriver');
require('node-firefox-driver')
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

function CustomWorld({attach, parameters}) {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('firefox')
        .build();
    this.attach = attach;
    this.parameters = parameters;
    this.waitForElement = function(locator) {
        var condition = seleniumWebdriver.until.elementLocated(locator);
        return this.driver.wait(condition)
    }
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
})

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
});
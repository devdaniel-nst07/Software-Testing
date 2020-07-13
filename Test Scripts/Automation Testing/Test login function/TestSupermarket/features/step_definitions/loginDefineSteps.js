var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var app = require('../../app');

defineSupportCode(function({Given, When, Then}) {
    var timeout = 1000;
    //Login function
    Given('I am on Supermarket login page', function() {
        return this.driver.get('http://testsupermarket.apphb.com/Login.aspx');
    });

    When('I enter username as {string}', function (text) {
    var driver = this.driver;
    return this.driver.findElement({id: 'UserName'}, ).then(function(element) {
        return element.sendKeys(text).then(function () {
            return driver.sleep(timeout);
        });
    });
});

    When('I enter password as {string}', function (text) {
        var driver = this.driver;
        return this.driver.findElement({id: 'Password'}).then(function(element) {
            return element.sendKeys(text).then(function () {
                return driver.sleep(timeout);
            });
        });
    });

    When('I click login', function () {
        var driver = this.driver;
        return this.driver.findElement({id: 'LoginButton'}).then(function(element) {
            return element.click().then(function () {
                return driver.sleep(timeout);
            });
        });
    });

    Then('Should be success', function () {
        var driver = this.driver;
        var promise = seleniumWebdriver.promise;
        return this.driver.getCurrentUrl().then(function (rs) {
            if(rs.toLowerCase().indexOf("http://testsupermarket.apphb.com/default.aspx") != -1)
            {
                return promise.fullyResolved("Pass");
            }
            return promise.rejected("Fail");
        }).then(function (rs) {
            console.log(rs);
        });
    });

    Then('Should be fail', function () {
        var driver = this.driver;
        var promise = seleniumWebdriver.promise;
        return this.driver.getCurrentUrl().then(function (rs) {
            if(rs.toLowerCase().indexOf("http://testsupermarket.apphb.com/default.aspx") == -1)
            {
                return promise.fullyResolved("Passed");
            }
            return promise.rejected("Failed");
        }).then(function (rs) {
            console.log(rs);
        });
    });
});
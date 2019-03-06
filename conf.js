exports.config = {
    SELENIUM_PROMISE_MANAGER: 0,
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/*.js'],
    capabilities: {
        shardTestFiles: true,
        browserName: 'chrome',
        maxInstances: 1,
        chromeOptions: {
            args: ["--window-size=1920,1080"]
        }
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        stopSpecOnExpectationFailure: true
        },
    onPrepare: async function() {   
        await browser.restart();     
        await browser.manage().setTimeouts({ implicit: 5000 });     
        await browser.waitForAngularEnabled(false); 
    }
}
let pageUrl = "https://nodal.com/contact/";

let nameElement = element(by.id('name'));
let emailElement = element(by.id('emailAddress'));;
let msgElement = element(by.id('message'));;
let sendBtnElement = element(by.css('button[type="submit"]'));;

let masgSentPopupElement = element(by.css('div[class*="Alert-module--success"]'));;

let EC = protractor.ExpectedConditions;

describe("Contact form", () => {
    beforeEach(async () => {
        await browser.get(pageUrl);
    });

    it("Should not send when name is empty", async () => {
        await nameElement.sendKeys("");
        await emailElement.sendKeys("test@email.com");
        await msgElement.sendKeys("test msg");
        await sendBtnElement.click();
        await browser.wait(EC.invisibilityOf (masgSentPopupElement), 10000);
        await browser.sleep(5000);
    });

    it("Should not send when email is empty", async () => {
        await nameElement.sendKeys("test name");
        await emailElement.sendKeys("");
        await msgElement.sendKeys("test msg");
        await sendBtnElement.click();
        await browser.wait(EC.invisibilityOf (masgSentPopupElement), 10000);
        await browser.sleep(5000);
    });

    it("Should not send when message is empty", async () => {
        await nameElement.sendKeys("test name");
        await emailElement.sendKeys("test@email.com");
        await msgElement.sendKeys("");
        await sendBtnElement.click();
        await browser.wait(EC.invisibilityOf (masgSentPopupElement), 10000);
        await browser.sleep(5000);
    });

    it("Should not send without @", async () => {
        await nameElement.sendKeys("test name");
        await emailElement.sendKeys("testemail.com");
        await msgElement.sendKeys("test msg");
        await sendBtnElement.click();
        await browser.wait(EC.invisibilityOf (masgSentPopupElement), 10000);
        await browser.sleep(5000);
    });

    it("Should not send without '.'", async () => {
        await nameElement.sendKeys("test name");
        await emailElement.sendKeys("test@emailcom");
        await msgElement.sendKeys("test msg");
        await sendBtnElement.click();
        await browser.wait(EC.invisibilityOf (masgSentPopupElement), 10000);
        await browser.sleep(5000);
    });

    it("Should send correct data", async () => {
        await nameElement.sendKeys("test name");
        await emailElement.sendKeys("test@email.com");
        await msgElement.sendKeys("test msg");
        await sendBtnElement.click();
        await browser.wait(EC.visibilityOf (masgSentPopupElement), 10000);
        await browser.sleep(5000);
    });
});
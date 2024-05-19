# ApexSystems-Equal-Example
 Cypress test automation for the Apex Systems E-Qual system. This code was built from scratch using Cypress IO as the test automation framework.

 ## Local setup
 The latest LTS version of Node/NPM is needed to run this code locally. Clone the repo then run the following command to install all dependencies: `npm install`. Once the code has been installed, run `npx cypress open` to open a headed version of the code. To run headlessly, simply run `npx cypress run`.

 ## Selenium Webdriver version (using Javascript)
 If you would like to run this same code in Selenium using JS, please create a new file with the following code:
```
 const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function apexEqualTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Page Objects
        const url = 'https://equaldev.apexsystems.com/';
        const emailInputField = By.id('filled-basic');
        const emailSubmitButton = By.id('emailsubmit');

        // Test 1: Inputs a valid email in the input field
        await driver.get(url);
        await driver.findElement(emailInputField).sendKeys('shaun.foran@gmail.com');
        await driver.findElement(emailSubmitButton).click();
        await driver.navigate().refresh();

        // Test 2: Runs through the rest of the test steps
        await driver.get(url);
        await driver.findElement(By.css('[data-testid="WbSunnyIcon"]')).click();
        await driver.findElement(emailInputField).sendKeys('shaun_foran@outlook.com');
        await driver.findElement(emailSubmitButton).click();
        await driver.findElement(By.id('practice-area-select')).sendKeys('QA:');
        await driver.findElement(By.id('practiceareasubmit')).click();
        await driver.findElement(By.xpath('//button[contains(text(), "Automation")]')).click();
        await driver.findElement(By.xpath('//button[contains(text(), "Test Automation Engineer/SDET")]')).click();
        await driver.findElement(By.id('projectInfo1')).sendKeys('2 manual testers and 1 automation engineer');
        await driver.findElement(By.css('[data-testid="Brightness3Icon"]')).click();
        await driver.findElement(By.id('saveProjectDataSubmit')).click();
        await driver.findElement(By.xpath('//button[contains(text(), "Start Over")]')).click();

    } finally {
        await driver.quit();
    }
})();
```

*Note: You will need the following dependencies installed first: `selenium-webdriver`, `chromedriver`*
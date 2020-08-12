const { Builder, By, Key, until, Browser } = require('selenium-webdriver');
import {assert, driver} from 'mocha-webdriver';
const { expect } = require('chai');
const { describe,it, after } = require('mocha');

describe('DefaultTest', () => {
    // const driver = global.driver
    //     ? global.driver
    //     : new Builder().forBrowser('chrome').build();
    // const driver = new Builder().forBrowser('chrome').build();
    // const b = new Builder().forBrowser('chrome').build();
    // const a = "hello";
    // it('should go to nehalist.io and check the title', async () => {
    //     // await driver.get('https://nehalist.io');
    //     await driver.get('https://www.google.com');
    //     await driver.sleep(20000);
    //     await driver.findElement(By.name('q')).sendKeys('nehalist', Key.ENTER);
    //     await driver.wait(until.elementLocated(By.id('search')));
    //     await driver.findElement(By.linkText('nehalist.io')).click();
    //     const title = await driver.getTitle();

    //     expect(title).to.equal('nehalist.io');
    // });

    // it('should go to nehalist.io and check social icons in nav bar', async () => {
    //     await driver.get('https://nehalist.io');
    //     const twitterLink = await driver.findElement(By.className('social-link-twitter')).getAttribute('href');
    //     // const githubLink  = await driver.findElement(By.className('social-link-github')).getAttribute('href');

    //     expect(twitterLink).to.equal('https://twitter.com/nehalist');
    //     // expect(githubLink).to.equal('https://github.com/nehalist');
    // });
    it('should go to uitestingplayground, verifytext', async () => {
        
        await driver.get('http://uitestingplayground.com/verifytext');
        // await browser.url('http://uitestingplayground.com/verifytext')
        await driver.sleep(3000)

        const link = await (await driver.findElement(By.className('bg-primary'))).getText();
        console.log('link text is ', link);
        expect(link).to.equal('Welcome UserName!');
        // const twitterLink = await driver.findElement(By.className('social-link-twitter')).getAttribute('href');
        // const githubLink  = await driver.findElement(By.className('social-link-github')).getAttribute('href');

        // expect(twitterLink).to.equal('https://twitter.com/nehalist');
        // expect(githubLink).to.equal('https://github.com/nehalist');
    });

    it('should go to uitestingplayground, visibility', async () => {
        
        await driver.get('http://uitestingplayground.com/visibility');
        await driver.sleep(3000)

        // const link = (await (await driver.findElement(By.className('container'))).findElement(By.className('btn-primary'))).getText()
        // const link = (await driver.findElement(By.xpath("//button[@class='btn btn-primary']"))).getText()
        // const link = await (await driver.findElement(By.className('bg-primary')).findElement(By.className('badge-secondary'))).getText();
        const link = await driver.findElement(By.id("hideButton")).getText()
        console.log('link text is ', link);
        expect(link).to.equal('Hide');
        // const twitterLink = await driver.findElement(By.className('social-link-twitter')).getAttribute('href');
        // const githubLink  = await driver.findElement(By.className('social-link-github')).getAttribute('href');

        // expect(twitterLink).to.equal('https://twitter.com/nehalist');
        // expect(githubLink).to.equal('https://github.com/nehalist');
    });

    // after(async () => driver.quit());
});
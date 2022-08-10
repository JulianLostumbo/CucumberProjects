const { Given } = require('@wdio/cucumber-framework');

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});
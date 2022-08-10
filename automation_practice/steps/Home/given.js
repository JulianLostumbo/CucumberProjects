const { Given } = require('@wdio/cucumber-framework');
const goToPage = require("../../support/actions/goToPage");

Given(/^the browser is at the "(Home|Login)" page$/, page => {
  goToPage(page);
});

const { When } = require('@wdio/cucumber-framework');
const search = require("../../support/actions/search");
const selectMenuOption = require("../../support/actions/selectMenuOption");

When(/^the user searches for "(.*)"$/, keyword => {
  search(keyword);
});

When(/^the user clicks on the "(.*)" menu option in the menu$/, option => {
  selectMenuOption(option);
});
const { Then } = require('@wdio/cucumber-framework');
const checkNoResultsError = require("../../support/assertions/checkNoResultsError");
const checkProducts = require("../../support/assertions/checkProducts");
const checkProductsContain = require("../../support/assertions/checkProductsContain");
const checkTitle = require("../../support/assertions/checkTitle");

Then("a no results error message is shown", () => {
  checkNoResultsError();
});

Then(/^(no )?products are listed$/, notListed => {
  if (notListed) {
    checkProducts(false);
  } else {
    checkProducts(true);
  }
});

Then(/^search results show products related to "(.*)"$/, keyword => {
  checkProductsContain(keyword);
});

Then(/^the title of the page should be "(.*)"$/, title => {
  checkTitle(title);
});
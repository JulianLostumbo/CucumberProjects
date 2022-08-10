const { Then } = require('@wdio/cucumber-framework');
const verifyLinksContain = require('../../support/assertions/verifyLinksContain');

Then(/^links related to "(.*)" are shown on the results page$/, (keyword) =>{
    verifyLinksContain(keyword)
})

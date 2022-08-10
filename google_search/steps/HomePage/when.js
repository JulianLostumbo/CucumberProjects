const { When } = require('@wdio/cucumber-framework');
import search from '../../support/actions/search'

When(/^the user enters "(.*)" into the search bar$/, (keyword) =>{
    search(keyword)
})

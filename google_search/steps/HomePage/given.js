const { Given } = require('@wdio/cucumber-framework');
import goToURL from '../../support/actions/goToURL'
const Home = require('../../pages/Home')

Given("a web browser is at the Google home page", () =>{
    goToURL(Home.url)
})
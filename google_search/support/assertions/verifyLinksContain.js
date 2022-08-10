const assert = require('assert')
const SearchResults = require('../../pages/SearchResults')

module.exports = (keyword) => {
    SearchResults.searchResultLinks.forEach(element => {
        const linkText = element.getText().toLowerCase();
        if (linkText) {
            assert(linkText.includes(keyword), `Link doesn't include ${keyword}`)
        }
    });
};
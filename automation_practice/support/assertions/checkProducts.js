const catalog = require("../../pages/Catalog");
const assert = require("assert");

/**
 * @param {boolean} toBeFound If true, products should be present, else they should not be present
 */
module.exports = toBeFound => {
  const products = catalog.products;

  if (toBeFound) {
    assert(products.length > 0, "No products were found");
  } else {
    assert(products.length === 0, "Products were found");
  }
};

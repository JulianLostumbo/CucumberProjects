const catalog = require("../../pages/Catalog");
const assert = require("assert");

/**
 * @param {boolean} keyword search term to be present
 */
module.exports = keyword => {
  const products = catalog.products;

  products.forEach(product => {
    const productText = product
      .getText()
      .trim()
      .toLowerCase();

    if (productText) {
      assert(
        productText.includes(keyword),
        `Product ${product.getText()} does not contain ${keyword}`
      );
    }
  });
};

const assert = require("assert");

/**
 * @param {boolean} title expected title
 */
module.exports = title => {
  assert(
    browser.getTitle() === title,
    `Title, ${browser.getTitle()} not equal to ${title}`
  );
};
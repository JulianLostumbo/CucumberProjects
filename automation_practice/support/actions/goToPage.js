const home = require("../../pages/Home");
const login = require("../../pages/Login");

module.exports = page => {
  switch (page) {
    case "Home":
      browser.url(home.url);
      break;
    case "Login":
      browser.url(login.url);
      break;
    default:
      console.log(`Invalid Page ${page}`);
  }
};

const login = require("../../pages/Login");
const assert = require("assert");

module.exports = errorMessage => {
  const authErrorMessage = login.errorMessage;

  assert(
    authErrorMessage.getText().includes(errorMessage),
    `Error message, ${authErrorMessage.getText()} did not match ${errorMessage}`
  );
};
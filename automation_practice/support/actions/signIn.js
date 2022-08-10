const login = require("../../pages/Login");
const credentials = require ("../../data/credentials");

module.exports = (isValid, email) => {
  const password = isValid
    ? credentials.find(creds => creds.email === email).password
    : "randomPassword";

  login.signIn(email, password);
};
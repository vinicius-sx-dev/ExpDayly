const emailRegexSafe = require('email-regex-safe');

function verifyEmail(email) {
  return(emailRegexSafe({ exact: true }).test(email));
}

module.exports = {
  verifyEmail
}
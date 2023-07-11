const db = require("../connection");
const { loginAuthenticatorDAO } = require("../models/loginAuthenticatorDAO");

const authenticateUser = async function(username, password) {
  return new Promise((resolve, reject) => {
    sql = loginAuthenticatorDAO
    db.all(sql, [username, password], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

module.exports = {
    authenticateUser
}
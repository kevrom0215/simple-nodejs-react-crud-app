const db = require("../connection");

const authenticateUser = async function(username, password) {
  return new Promise((resolve, reject) => {
    sql = `SELECT username, password FROM users WHERE username = ? AND password = ?`;
    db.all(sql, [username, password], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

module.exports = {
    authenticateUser
}
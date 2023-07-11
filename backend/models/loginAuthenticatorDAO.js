const loginAuthenticatorDAO = `SELECT username, password FROM users WHERE username = ? AND password = ?`;


module.exports = {
    loginAuthenticatorDAO
}
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


const reqHeaderChecker = async (req) =>{
  if(!req || !req.headers.authorization){
    return false;
  }
  else{
    return true;
  }
}

const authenticate = async function(req,res){
  if(reqHeaderChecker(req)){
    let base64Encoding = req.headers.authorization.split(" ")[1];
    let credentials = Buffer.from(base64Encoding, "base64").toString().split(":");
    const email = credentials[0];
    const password = credentials[1];
    const isAuthenticated = await authenticateUser(email,password)
    if(isAuthenticated.length != 0){
      res.status(200).send({
        "message": "user authenticated"
      })
    }
    else{
      res.status(400).send({
        "message": "no match"
    })
    }
  }
  else{
    res.status(400).send("Invalid Request")
  }
}

module.exports = {
    authenticate
}
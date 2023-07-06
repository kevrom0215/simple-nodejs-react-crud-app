let connection = require("../connection");

getUserbyUsername = async function(username){
    const users = await new Promise((resolve,reject)=>{
        connection.query("SELECT username, password from users", (err,result,fields)=>{
            if(err) reject(err);
            else{
                resolve(result)
            }
        })
    })
    const filteredUserArray = users.filter(
        (user) => user.username === username
    )
    return filteredUserArray.length === 0 ? null: filteredUserArray[0];
}

authenticateUser = async function(username, password){
    const user = await getUserbyUsername(username);
    if(user){
        return (password === user.password);
    }
    else{
        return false;
    }
}

module.exports = {
    authenticateUser
}
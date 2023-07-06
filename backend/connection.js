let mysql = require('mysql')
require('dotenv').config()

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log(">>> Connected to the Database")
})

module.exports = connection;
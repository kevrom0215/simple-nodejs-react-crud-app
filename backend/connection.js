let sql;
const sqlite3 = require('sqlite3').verbose();

//connect to DB
const db = new sqlite3.Database('test.db',sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);
});


module.exports = db;
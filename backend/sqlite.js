let sql;
const sqlite3 = require('sqlite3').verbose();

//connect to DB
const db = new sqlite3.Database('test.db',sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);
});


// // create table
// sql = `CREATE TABLE users (
//   id INTEGER PRIMARY KEY,
//   username VARCHAR(10) DEFAULT NULL,
//   password VARCHAR(10) DEFAULT NULL
// );`
// db.run(sql);


//create items
// sql = `CREATE TABLE items (
//   name VARCHAR(100) NOT NULL,
//   quantity INTEGER NOT NULL,
//   id INTEGER PRIMARY KEY NOT NULL
// );
// `
// db.run(sql);

// // insert item
// sql = `INSERT INTO items(name, quantity) values (?,?)`
// db.run(sql,["patty", "10"], (err)=>{
//   if (err) return console.error(err.message);
// })

// //select item
// sql = `SELECT * from items`
// db.all(sql,[],(err, rows)=>{
//     if (err) return console.error(err.message);
//     rows.forEach((element) => {
//       console.log(element)
//     });
//   })
  
//update
// sql = `UPDATE items SET quantity = ? WHERE name = ?`
// db.run(sql, [5, "patty"], (err)=>{
//   if (err) return console.error(err.message);
// })


// // drop table
// // db.run("DROP TABLE users")

// //insert data
// sql = `INSERT INTO users(username, password) values (?,?)`;
// db.run(sql,["kenneth", "hello"],(err)=>{
//   if (err) return console.error(err.message);
// })

// select 
// sql = `SELECT * FROM users`
// db.all(sql,[],(err, rows)=>{
//   if (err) return console.error(err.message);
//   rows.forEach((element) => {
//     console.log(element)
//   });
// })

//select 1 item
// const username = "aljon"
// const password = "hello"
// sql = `SELECT username, password FROM users where username = "${username}" and password = "${password}"`
// db.all(sql,[],(err, rows)=>{
//     if (err) return console.error(err.message);
//     rows.forEach((element) => {
//       console.log(element)
//     });
//   })

//update
// sql = `UPDATE users SET username = ? WHERE id = ?`
// db.run(sql, ["aljon", 1], (err)=>{
//   if (err) return console.error(err.message);
// })

// //delete
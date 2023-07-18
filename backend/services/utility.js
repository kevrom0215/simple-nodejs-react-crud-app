let sql;
const sqlite3 = require('sqlite3').verbose();


//connect to DB
const db = new sqlite3.Database('../test.db',sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);
});

// const sql1 = `CREATE TABLE ordered (
//     triggered BOOLEAN,
//     date_triggered DATE
//   )`;

//   db.run(sql1, [], (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(`Table 'ordered' created successfully.`);
//   }});


// sql = `SELECT * from ordered`
// db.all(sql,[],(err, rows)=>{
//     if (err) return console.error(err.message);
//     rows.forEach((element) => {
//       console.log(element)
//     });
//   })
const currentDate = new Date();
console.log(currentDate)
console.log(currentDate.toString())
console.log(currentDate.toTimeString())


const timestamp = 1689591762715;
const date = new Date(timestamp);
const formattedDate = date.toLocaleString();

console.log(formattedDate);
// sql = `INSERT INTO ordered (item, triggered, date_triggered) VALUES (?, ? ,?)`
// db.run(sql,["kenneth", "false", currentDate ],(err)=>{
//   if (err) return console.error(err.message);
// })

// sql = `ALTER TABLE ordered ADD COLUMN item varchar(20)`
//   db.run(sql, [], (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(`Table 'ordered' created successfully.`);
//   }});
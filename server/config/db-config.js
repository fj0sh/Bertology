require("dotenv").config();
const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

conn.connect((error) => {
  if (error) console.log(error);
  console.log("Connected Successfully");
});

module.exports = conn;

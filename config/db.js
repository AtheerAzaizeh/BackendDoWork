const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, // Your MySQL username
  password: process.env.DB_PASS, // Your MySQL password
  database: process.env.DB_NAME, // The database you created
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    return;
  }
  console.log("Connected to the MySQL database");
});

module.exports = db;

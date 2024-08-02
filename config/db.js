const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, // Your MySQL username
  password: process.env.DB_PASS, // Your MySQL password
  database: process.env.DB_NAME, // The database you created
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  if (connection) connection.release();
  console.log("Connected to the MySQL database");
});

module.exports = pool;

// dbHelper.js
const pool = require("./db");

function executeQuery(query, values) {
  return new Promise((resolve, reject) => {
    pool.query(query, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

module.exports = { executeQuery };

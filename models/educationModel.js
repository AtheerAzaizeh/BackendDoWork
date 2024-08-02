const db = require("../config/db");

const Education = {
  create: (education, callback) => {
    const query =
      "INSERT INTO tbl_108_dowork_Education (cv_id, academic_name, start_date, end_date) VALUES (?, ?, ?, ?)";
    console.log("Executing query:", query, education);
    db.query(
      query,
      [
        education.cv_id,
        education.academic_name,
        education.start_date,
        education.end_date,
      ],
      (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
          callback(err, null);
          return;
        }
        console.log("Query executed successfully:", result);
        callback(null, result);
      }
    );
  },

  findAll: (callback) => {
    const query = "SELECT * FROM tbl_108_dowork_Education";
    console.log("Executing query:", query);
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        callback(err, null);
        return;
      }
      console.log("Query executed successfully:", results);
      callback(null, results);
    });
  },

  findByCVId: (cv_id, callback) => {
    const query = "SELECT * FROM tbl_108_dowork_Education WHERE cv_id = ?";
    console.log("Executing query:", query, cv_id);
    db.query(query, [cv_id], (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        callback(err, null);
        return;
      }
      console.log("Query executed successfully:", results);
      callback(null, results);
    });
  },

  update: (id, education, callback) => {
    const query =
      "UPDATE tbl_108_dowork_Education SET academic_name = ?, start_date = ?, end_date = ? WHERE education_id = ?";
    console.log("Executing query:", query, education, id);
    db.query(
      query,
      [education.academic_name, education.start_date, education.end_date, id],
      (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
          callback(err, null);
          return;
        }
        console.log("Query executed successfully:", result);
        callback(null, result);
      }
    );
  },

  delete: (id, callback) => {
    const query = "DELETE FROM tbl_108_dowork_Education WHERE education_id = ?";
    console.log("Executing query:", query, id);
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        callback(err, null);
        return;
      }
      console.log("Query executed successfully:", result);
      callback(null, result);
    });
  },
};

module.exports = Education;

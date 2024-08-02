const db = require("../config/db");

const CV = {
  create: (cv, callback) => {
    const query =
      "INSERT INTO tbl_108_dowork_CVs (job_seeker_id, photo_url, name, email, location, phone_number) VALUES (?, ?, ?, ?, ?, ?)";
    console.log("Executing query:", query, cv);
    db.query(
      query,
      [
        cv.job_seeker_id,
        cv.photo_url,
        cv.name,
        cv.email,
        cv.location,
        cv.phone_number,
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
    const query = "SELECT * FROM tbl_108_dowork_CVs";
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

  findById: (id, callback) => {
    const query = "SELECT * FROM tbl_108_dowork_CVs WHERE cv_id = ?";
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

  update: (id, cv, callback) => {
    const query =
      "UPDATE tbl_108_dowork_CVs SET photo_url = ?, name = ?, email = ?, location = ?, phone_number = ? WHERE cv_id = ?";
    console.log("Executing query:", query, cv, id);
    db.query(
      query,
      [cv.photo_url, cv.name, cv.email, cv.location, cv.phone_number, id],
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
    const query = "DELETE FROM tbl_108_dowork_CVs WHERE cv_id = ?";
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

module.exports = CV;

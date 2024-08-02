const db = require("../config/db");

const EmployeeSeeker = {
  create: (employeeSeeker, callback) => {
    const query =
      "INSERT INTO tbl_108_dowork_EmployeeSeekers (username, password, email, profile_picture) VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [
        employeeSeeker.username,
        employeeSeeker.password,
        employeeSeeker.email,
        employeeSeeker.profile_picture,
      ],
      (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
          return callback(err, null);
        }
        callback(null, result);
      }
    );
  },

  findAll: (callback) => {
    const query = "SELECT * FROM tbl_108_dowork_EmployeeSeekers";
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
    const query = "SELECT * FROM tbl_108_dowork_EmployeeSeekers WHERE employee_seeker_id = ?";
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

  update: (id, employeeSeeker, callback) => {
    const query =
      "UPDATE EmployeeSeekers SET username = ?, password = ?, email = ? WHERE employee_seeker_id = ?";
    console.log("Executing query:", query, employeeSeeker, id);
    db.query(
      query,
      [
        employeeSeeker.username,
        employeeSeeker.password,
        employeeSeeker.email,
        id,
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

  delete: (id, callback) => {
    const query = "DELETE FROM EmployeeSeekers WHERE employee_seeker_id = ?";
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

module.exports = EmployeeSeeker;

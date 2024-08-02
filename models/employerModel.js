const db = require("../config/db");

const Employer = {
  create: (employer, callback) => {
    const query =
      "INSERT INTO tbl_108_dowork_Employers (company_name, company_description, contact_email, employee_seeker_id) VALUES (?, ?, ?, ?)";
    console.log("Executing query:", query, employer);
    db.query(
      query,
      [
        employer.company_name,
        employer.company_description,
        employer.contact_email,
        employer.employee_seeker_id,
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
    const query = "SELECT * FROM tbl_108_dowork_Employers";
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
    const query = "SELECT * FROM tbl_108_dowork_Employers WHERE employer_id = ?";
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

  update: (id, employer, callback) => {
    const query =
      "UPDATE tbl_108_dowork_Employers SET company_name = ?, company_description = ?, contact_email = ?, employee_seeker_id = ? WHERE employer_id = ?";
    console.log("Executing query:", query, employer, id);
    db.query(
      query,
      [
        employer.company_name,
        employer.company_description,
        employer.contact_email,
        employer.employee_seeker_id,
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
    const query = "DELETE FROM Employers WHERE employer_id = ?";
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

module.exports = Employer;

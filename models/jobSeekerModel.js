const db = require("../config/db");

const JobSeeker = {
  create: (jobSeeker, callback) => {
    const query =
      "INSERT INTO JobSeekers (username, password, email, skills) VALUES (?, ?, ?, ?)";
    console.log("Executing query:", query, jobSeeker);
    db.query(
      query,
      [
        jobSeeker.username,
        jobSeeker.password,
        jobSeeker.email,
        jobSeeker.skills,
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
    const query = "SELECT * FROM JobSeekers";
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
    const query = "SELECT * FROM JobSeekers WHERE job_seeker_id = ?";
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

  update: (id, jobSeeker, callback) => {
    const query =
      "UPDATE JobSeekers SET username = ?, password = ?, email = ?, skills = ? WHERE job_seeker_id = ?";
    console.log("Executing query:", query, jobSeeker, id);
    db.query(
      query,
      [
        jobSeeker.username,
        jobSeeker.password,
        jobSeeker.email,
        jobSeeker.skills,
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
    const query = "DELETE FROM JobSeekers WHERE job_seeker_id = ?";
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

module.exports = JobSeeker;

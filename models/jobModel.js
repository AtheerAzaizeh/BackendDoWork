const db = require("../config/db");

const Job = {
  findBySkills: (skills, callback) => {
    const query = `
      SELECT * FROM Jobs 
      WHERE skill IN (?)`;
    console.log("Executing query:", query, skills);
    db.query(query, [skills], (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return callback(err, null);
      }
      console.log("Query results:", results);
      callback(null, results);
    });
  },

  create: (job, callback) => {
    const query =
      "INSERT INTO Jobs (employer_id, title, description, location, salary, skill) VALUES (?, ?, ?, ?, ?, ?)";
    console.log("Executing query:", query, job);
    db.query(
      query,
      [
        job.employer_id,
        job.title,
        job.description,
        job.location,
        job.salary,
        job.skill,
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
    const query = "SELECT * FROM Jobs";
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
    const query = "SELECT * FROM Jobs WHERE job_id = ?";
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

  update: (id, job, callback) => {
    const query =
      "UPDATE Jobs SET title = ?, description = ?, location = ?, salary = ?, skill = ? WHERE job_id = ?";
    console.log("Executing query:", query, job, id);
    db.query(
      query,
      [job.title, job.description, job.location, job.salary, job.skill, id],
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
    const query = "DELETE FROM Jobs WHERE job_id = ?";
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

module.exports = Job;

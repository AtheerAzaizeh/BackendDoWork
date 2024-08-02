const { executeQuery } = require("../config/dbHelper");

const JobSeeker = {
  create: async (jobSeeker) => {
    const query =
      "INSERT INTO tbl_108_dowork_JobSeekers (username, password, email, skills) VALUES (?, ?, ?, ?)";
    const values = [
      jobSeeker.username,
      jobSeeker.password,
      jobSeeker.email,
      jobSeeker.skills,
    ];
    console.log("Executing query:", query, values);
    return executeQuery(query, values);
  },

  findAll: async () => {
    const query = "SELECT * FROM tbl_108_dowork_JobSeekers";
    console.log("Executing query:", query);
    return executeQuery(query);
  },

  findById: async (id) => {
    const query =
      "SELECT * FROM tbl_108_dowork_JobSeekers WHERE job_seeker_id = ?";
    console.log("Executing query:", query, id);
    return executeQuery(query, [id]);
  },

  update: async (id, jobSeeker) => {
    const query =
      "UPDATE tbl_108_dowork_JobSeekers SET username = ?, password = ?, email = ?, skills = ? WHERE job_seeker_id = ?";
    const values = [
      jobSeeker.username,
      jobSeeker.password,
      jobSeeker.email,
      jobSeeker.skills,
      id,
    ];
    console.log("Executing query:", query, values);
    return executeQuery(query, values);
  },

  delete: async (id) => {
    const query =
      "DELETE FROM tbl_108_dowork_JobSeekers WHERE job_seeker_id = ?";
    console.log("Executing query:", query, id);
    return executeQuery(query, [id]);
  },
};

module.exports = JobSeeker;

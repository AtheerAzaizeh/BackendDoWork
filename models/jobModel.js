const { executeQuery } = require("../config/dbHelper");

const Job = {
  findBySkills: async (skills) => {
    const query = `
      SELECT * FROM tbl_108_dowork_Jobs 
      WHERE skill IN (?)`;
    console.log("Executing query:", query, skills);
    return executeQuery(query, [skills]);
  },

  create: async (job) => {
    const query =
      "INSERT INTO tbl_108_dowork_Jobs (employer_id, title, description, location, salary, skill) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
      job.employer_id,
      job.title,
      job.description,
      job.location,
      job.salary,
      job.skill,
    ];
    console.log("Executing query:", query, values);
    return executeQuery(query, values);
  },

  findAll: async () => {
    const query = "SELECT * FROM tbl_108_dowork_Jobs";
    console.log("Executing query:", query);
    return executeQuery(query);
  },

  findById: async (id) => {
    const query = "SELECT * FROM tbl_108_dowork_Jobs WHERE job_id = ?";
    console.log("Executing query:", query, id);
    return executeQuery(query, [id]);
  },

  update: async (id, job) => {
    const query =
      "UPDATE tbl_108_dowork_Jobs SET title = ?, description = ?, location = ?, salary = ?, skill = ? WHERE job_id = ?";
    const values = [
      job.title,
      job.description,
      job.location,
      job.salary,
      job.skill,
      id,
    ];
    console.log("Executing query:", query, values);
    return executeQuery(query, values);
  },

  delete: async (id) => {
    const query = "DELETE FROM tbl_108_dowork_Jobs WHERE job_id = ?";
    console.log("Executing query:", query, id);
    return executeQuery(query, [id]);
  },
};

module.exports = Job;

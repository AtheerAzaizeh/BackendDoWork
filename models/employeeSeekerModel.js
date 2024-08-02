const { executeQuery } = require("../config/dbHelper");

const EmployeeSeeker = {
  create: async (employeeSeeker) => {
    const query =
      "INSERT INTO tbl_108_dowork_EmployeeSeekers (username, password, email, profile_picture) VALUES (?, ?, ?, ?)";
    const values = [
      employeeSeeker.username,
      employeeSeeker.password,
      employeeSeeker.email,
      employeeSeeker.profile_picture,
    ];
    return executeQuery(query, values);
  },

  findAll: async () => {
    const query = "SELECT * FROM tbl_108_dowork_EmployeeSeekers";
    return executeQuery(query);
  },

  findById: async (id) => {
    const query =
      "SELECT * FROM tbl_108_dowork_EmployeeSeekers WHERE employee_seeker_id = ?";
    return executeQuery(query, [id]);
  },

  update: async (id, employeeSeeker) => {
    const query =
      "UPDATE tbl_108_dowork_EmployeeSeekers SET username = ?, password = ?, email = ?, profile_picture = ? WHERE employee_seeker_id = ?";
    const values = [
      employeeSeeker.username,
      employeeSeeker.password,
      employeeSeeker.email,
      employeeSeeker.profile_picture,
      id,
    ];
    return executeQuery(query, values);
  },

  delete: async (id) => {
    const query =
      "DELETE FROM tbl_108_dowork_EmployeeSeekers WHERE employee_seeker_id = ?";
    return executeQuery(query, [id]);
  },
};

module.exports = EmployeeSeeker;

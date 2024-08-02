const { executeQuery } = require("../config/dbHelper");

const User = {
  findByEmail: async (email) => {
    const queryEmployeeSeekers =
      "SELECT * FROM tbl_108_dowork_EmployeeSeekers WHERE email = ?";
    const queryJobSeekers =
      "SELECT * FROM tbl_108_dowork_JobSeekers WHERE email = ?";

    try {
      const employeeResults = await executeQuery(queryEmployeeSeekers, [email]);
      if (employeeResults.length > 0) {
        return { user: employeeResults[0], type: "employee" };
      } else {
        const jobResults = await executeQuery(queryJobSeekers, [email]);
        if (jobResults.length > 0) {
          return { user: jobResults[0], type: "job" };
        } else {
          return { user: null, type: null };
        }
      }
    } catch (err) {
      throw new Error(`Error fetching user by email: ${err.message}`);
    }
  },
};

module.exports = User;

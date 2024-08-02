const db = require("../config/db");

const User = {
  findByEmail: (email, callback) => {
    const queryEmployeeSeekers =
      "SELECT * FROM tbl_108_dowork_EmployeeSeekers WHERE email = ?";
    const queryJobSeekers = "SELECT * FROM jobSeekers WHERE email = ?";

    db.query(queryEmployeeSeekers, [email], (err, employeeResults) => {
      if (err) {
        return callback(err, null, null);
      }
      if (employeeResults.length > 0) {
        return callback(null, employeeResults[0], "employee");
      } else {
        db.query(queryJobSeekers, [email], (err, jobResults) => {
          if (err) {
            return callback(err, null, null);
          }
          if (jobResults.length > 0) {
            return callback(null, jobResults[0], "job");
          } else {
            return callback(null, null, null);
          }
        });
      }
    });
  },
};

module.exports = User;

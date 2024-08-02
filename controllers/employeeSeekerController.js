const EmployeeSeeker = require("../models/employeeSeekerModel");

exports.create = (req, res) => {
  const newEmployeeSeeker = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profile_picture: req.file ? req.file.filename : null,
  };

  EmployeeSeeker.create(newEmployeeSeeker, (err, result) => {
    if (err) {
      console.error("Error creating employee seeker:", err);
      return res
        .status(500)
        .json({ message: "Error creating employee seeker" });
    }
    res
      .status(201)
      .json({ message: "Employee seeker created", id: result.insertId });
  });
};

exports.findAll = (req, res) => {
  console.log("Fetching all employee seekers");
  EmployeeSeeker.findAll((err, results) => {
    if (err) {
      console.error("Error fetching employee seekers:", err);
      res.status(500).send("Error fetching employee seekers");
      return;
    }
    console.log("Employee seekers fetched:", results);
    res.json(results);
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  console.log(`Fetching employee seeker with id: ${id}`);

  EmployeeSeeker.findById(id, (err, result) => {
    if (err) {
      console.error("Error fetching employee seeker:", err);
      res.status(500).send("Error fetching employee seeker");
      return;
    }
    if (!result) {
      console.log(`Employee seeker with id ${id} not found`);
      res.status(404).send("Employee seeker not found");
      return;
    }
    console.log(`Employee seeker with id ${id} fetched:`, result);
    res.json(result);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(`Updating employee seeker with id: ${id}`);
  const updatedEmployeeSeeker = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };

  EmployeeSeeker.update(id, updatedEmployeeSeeker, (err, result) => {
    if (err) {
      console.error("Error updating employee seeker:", err);
      res.status(500).send("Error updating employee seeker");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Employee seeker with id ${id} not found`);
      res.status(404).send("Employee seeker not found");
      return;
    }
    console.log(`Employee seeker with id ${id} updated:`, result);
    res.send("Employee seeker updated");
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting employee seeker with id: ${id}`);

  EmployeeSeeker.delete(id, (err, result) => {
    if (err) {
      console.error("Error deleting employee seeker:", err);
      res.status(500).send("Error deleting employee seeker");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Employee seeker with id ${id} not found`);
      res.status(404).send("Employee seeker not found");
      return;
    }
    console.log(`Employee seeker with id ${id} deleted:`, result);
    res.send("Employee seeker deleted");
  });
};

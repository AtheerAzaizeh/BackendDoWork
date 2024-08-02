const EmployeeSeeker = require("../models/employeeSeekerModel");

exports.create = async (req, res) => {
  const newEmployeeSeeker = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profile_picture: req.file ? req.file.filename : null,
  };

  try {
    const result = await EmployeeSeeker.create(newEmployeeSeeker);
    res
      .status(201)
      .json({ message: "Employee seeker created", id: result.insertId });
  } catch (err) {
    console.error("Error creating employee seeker:", err);
    res.status(500).json({ message: "Error creating employee seeker" });
  }
};

exports.findAll = async (req, res) => {
  console.log("Fetching all employee seekers");
  try {
    const results = await EmployeeSeeker.findAll();
    console.log("Employee seekers fetched:", results);
    res.json(results);
  } catch (err) {
    console.error("Error fetching employee seekers:", err);
    res.status(500).send("Error fetching employee seekers");
  }
};

exports.findById = async (req, res) => {
  const id = req.params.id;
  console.log(`Fetching employee seeker with id: ${id}`);

  try {
    const result = await EmployeeSeeker.findById(id);
    if (!result) {
      console.log(`Employee seeker with id ${id} not found`);
      res.status(404).send("Employee seeker not found");
      return;
    }
    console.log(`Employee seeker with id ${id} fetched:`, result);
    res.json(result);
  } catch (err) {
    console.error("Error fetching employee seeker:", err);
    res.status(500).send("Error fetching employee seeker");
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  console.log(`Updating employee seeker with id: ${id}`);
  const updatedEmployeeSeeker = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };

  try {
    const result = await EmployeeSeeker.update(id, updatedEmployeeSeeker);
    if (result.affectedRows === 0) {
      console.log(`Employee seeker with id ${id} not found`);
      res.status(404).send("Employee seeker not found");
      return;
    }
    console.log(`Employee seeker with id ${id} updated:`, result);
    res.send("Employee seeker updated");
  } catch (err) {
    console.error("Error updating employee seeker:", err);
    res.status(500).send("Error updating employee seeker");
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  console.log(`Deleting employee seeker with id: ${id}`);

  try {
    const result = await EmployeeSeeker.delete(id);
    if (result.affectedRows === 0) {
      console.log(`Employee seeker with id ${id} not found`);
      res.status(404).send("Employee seeker not found");
      return;
    }
    console.log(`Employee seeker with id ${id} deleted:`, result);
    res.send("Employee seeker deleted");
  } catch (err) {
    console.error("Error deleting employee seeker:", err);
    res.status(500).send("Error deleting employee seeker");
  }
};

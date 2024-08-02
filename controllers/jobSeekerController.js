const JobSeeker = require("../models/jobSeekerModel");

exports.create = async (req, res) => {
  const newJobSeeker = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    skills: req.body.skills,
  };

  try {
    const result = await JobSeeker.create(newJobSeeker);
    res
      .status(201)
      .json({ message: "Job seeker created", id: result.insertId });
  } catch (err) {
    console.error("Error creating job seeker:", err);
    res.status(500).json({ message: "Error creating job seeker" });
  }
};

exports.findAll = async (req, res) => {
  console.log("Fetching all job seekers");
  try {
    const results = await JobSeeker.findAll();
    console.log("Job seekers fetched:", results);
    res.json(results);
  } catch (err) {
    console.error("Error fetching job seekers:", err);
    res.status(500).send("Error fetching job seekers");
  }
};

exports.findById = async (req, res) => {
  const id = req.params.id;
  console.log(`Fetching job seeker with id: ${id}`);

  try {
    const result = await JobSeeker.findById(id);
    if (!result) {
      console.log(`Job seeker with id ${id} not found`);
      res.status(404).send("Job seeker not found");
      return;
    }
    console.log(`Job seeker with id ${id} fetched:`, result);
    res.json(result);
  } catch (err) {
    console.error("Error fetching job seeker:", err);
    res.status(500).send("Error fetching job seeker");
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  console.log(`Updating job seeker with id: ${id}`);
  const updatedJobSeeker = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    skills: req.body.skills,
  };

  try {
    const result = await JobSeeker.update(id, updatedJobSeeker);
    if (result.affectedRows === 0) {
      console.log(`Job seeker with id ${id} not found`);
      res.status(404).send("Job seeker not found");
      return;
    }
    console.log(`Job seeker with id ${id} updated:`, result);
    res.send("Job seeker updated");
  } catch (err) {
    console.error("Error updating job seeker:", err);
    res.status(500).send("Error updating job seeker");
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  console.log(`Deleting job seeker with id: ${id}`);

  try {
    const result = await JobSeeker.delete(id);
    if (result.affectedRows === 0) {
      console.log(`Job seeker with id ${id} not found`);
      res.status(404).send("Job seeker not found");
      return;
    }
    console.log(`Job seeker with id ${id} deleted:`, result);
    res.send("Job seeker deleted");
  } catch (err) {
    console.error("Error deleting job seeker:", err);
    res.status(500).send("Error deleting job seeker");
  }
};

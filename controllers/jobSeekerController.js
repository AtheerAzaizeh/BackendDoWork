const JobSeeker = require("../models/jobSeekerModel");

exports.create = (req, res) => {
  const newJobSeeker = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    skills: req.body.skills,
  };

  JobSeeker.create(newJobSeeker, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error creating job seeker" });
    }
    res
      .status(201)
      .json({ message: "Job seeker created", id: result.insertId });
  });
};

exports.findAll = (req, res) => {
  console.log("Fetching all job seekers");
  JobSeeker.findAll((err, results) => {
    if (err) {
      console.error("Error fetching job seekers:", err);
      res.status(500).send("Error fetching job seekers");
      return;
    }
    console.log("Job seekers fetched:", results);
    res.json(results);
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  console.log(`Fetching job seeker with id: ${id}`);

  JobSeeker.findById(id, (err, result) => {
    if (err) {
      console.error("Error fetching job seeker:", err);
      res.status(500).send("Error fetching job seeker");
      return;
    }
    if (!result) {
      console.log(`Job seeker with id ${id} not found`);
      res.status(404).send("Job seeker not found");
      return;
    }
    console.log(`Job seeker with id ${id} fetched:`, result);
    res.json(result);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(`Updating job seeker with id: ${id}`);
  const updatedJobSeeker = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };

  JobSeeker.update(id, updatedJobSeeker, (err, result) => {
    if (err) {
      console.error("Error updating job seeker:", err);
      res.status(500).send("Error updating job seeker");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Job seeker with id ${id} not found`);
      res.status(404).send("Job seeker not found");
      return;
    }
    console.log(`Job seeker with id ${id} updated:`, result);
    res.send("Job seeker updated");
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting job seeker with id: ${id}`);

  JobSeeker.delete(id, (err, result) => {
    if (err) {
      console.error("Error deleting job seeker:", err);
      res.status(500).send("Error deleting job seeker");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Job seeker with id ${id} not found`);
      res.status(404).send("Job seeker not found");
      return;
    }
    console.log(`Job seeker with id ${id} deleted:`, result);
    res.send("Job seeker deleted");
  });
};

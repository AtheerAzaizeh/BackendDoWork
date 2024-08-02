const Job = require("../models/jobModel");

exports.create = async (req, res) => {
  console.log("Creating a new job:", req.body);
  const newJob = {
    employer_id: req.body.employer_id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    salary: req.body.salary,
    skill: req.body.skill,
  };

  try {
    const result = await Job.create(newJob);
    console.log("Job created:", result);
    res.status(201).json({ message: "Job created", job: result });
  } catch (err) {
    console.error("Error creating job:", err);
    res.status(500).json({ message: "Error creating job" });
  }
};

exports.getJobsForYou = async (req, res) => {
  const skills = req.query.skills ? req.query.skills.split(",") : [];
  console.log("Fetching jobs for you with skills:", skills);

  try {
    const jobs = await Job.findBySkills(skills);
    console.log("Jobs fetched:", jobs);
    res.json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.findAll = async (req, res) => {
  console.log("Fetching all jobs");

  try {
    const results = await Job.findAll();
    console.log("Jobs fetched:", results);
    res.json(results);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).send("Error fetching jobs");
  }
};

exports.findById = async (req, res) => {
  const id = req.params.id;
  console.log(`Fetching job with id: ${id}`);

  try {
    const result = await Job.findById(id);
    if (!result) {
      console.log(`Job with id ${id} not found`);
      res.status(404).send("Job not found");
      return;
    }
    console.log(`Job with id ${id} fetched:`, result);
    res.json(result);
  } catch (err) {
    console.error("Error fetching job:", err);
    res.status(500).send("Error fetching job");
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  console.log(`Updating job with id: ${id}`);
  const updatedJob = {
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    salary: req.body.salary,
    skill: req.body.skill,
  };

  try {
    const result = await Job.update(id, updatedJob);
    if (result.affectedRows === 0) {
      console.log(`Job with id ${id} not found`);
      res.status(404).send("Job not found");
      return;
    }
    console.log(`Job with id ${id} updated:`, result);
    res.send("Job updated");
  } catch (err) {
    console.error("Error updating job:", err);
    res.status(500).send("Error updating job");
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  console.log(`Deleting job with id: ${id}`);

  try {
    const result = await Job.delete(id);
    if (result.affectedRows === 0) {
      console.log(`Job with id ${id} not found`);
      res.status(404).send("Job not found");
      return;
    }
    console.log(`Job with id ${id} deleted:`, result);
    res.send("Job deleted");
  } catch (err) {
    console.error("Error deleting job:", err);
    res.status(500).send("Error deleting job");
  }
};

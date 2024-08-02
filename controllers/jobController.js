const Job = require("../models/jobModel");

exports.create = (req, res) => {
  console.log("Creating a new job:", req.body);
  const newJob = {
    employer_id: req.body.employer_id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    salary: req.body.salary,
  };

  Job.create(newJob, (err, result) => {
    if (err) {
      console.error("Error creating job:", err);
      res.status(500).json({ message: "Error creating job" });
      return;
    }
    console.log("Job created:", result);
    res.status(201).json({ message: "Job created", job: result });
  });
};

exports.getJobsForYou = (req, res) => {
  const skills = req.query.skills ? req.query.skills.split(",") : [];
  console.log("Fetching jobs for you with skills:", skills);

  Job.findBySkills(skills, (err, jobs) => {
    if (err) {
      console.error("Error fetching jobs:", err);
      return res.status(500).json({ message: "Server error" });
    }
    console.log("Jobs fetched:", jobs);
    res.json(jobs);
  });
};

exports.findAll = (req, res) => {
  console.log("Fetching all jobs");
  Job.findAll((err, results) => {
    if (err) {
      console.error("Error fetching jobs:", err);
      res.status(500).send("Error fetching jobs");
      return;
    }
    console.log("Jobs fetched:", results);
    res.json(results);
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  console.log(`Fetching job with id: ${id}`);

  Job.findById(id, (err, result) => {
    if (err) {
      console.error("Error fetching job:", err);
      res.status(500).send("Error fetching job");
      return;
    }
    if (!result) {
      console.log(`Job with id ${id} not found`);
      res.status(404).send("Job not found");
      return;
    }
    console.log(`Job with id ${id} fetched:`, result);
    res.json(result);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(`Updating job with id: ${id}`);
  const updatedJob = {
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    salary: req.body.salary,
  };

  Job.update(id, updatedJob, (err, result) => {
    if (err) {
      console.error("Error updating job:", err);
      res.status(500).send("Error updating job");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Job with id ${id} not found`);
      res.status(404).send("Job not found");
      return;
    }
    console.log(`Job with id ${id} updated:`, result);
    res.send("Job updated");
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting job with id: ${id}`);

  Job.delete(id, (err, result) => {
    if (err) {
      console.error("Error deleting job:", err);
      res.status(500).send("Error deleting job");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Job with id ${id} not found`);
      res.status(404).send("Job not found");
      return;
    }
    console.log(`Job with id ${id} deleted:`, result);
    res.send("Job deleted");
  });
};

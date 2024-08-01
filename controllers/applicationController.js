const Application = require("../models/applicationModel");

exports.create = (req, res) => {
  console.log("Creating a new application:", req.body);
  const newApplication = {
    job_id: req.body.job_id,
    job_seeker_id: req.body.job_seeker_id,
    cover_letter: req.body.cover_letter,
    resume: req.body.resume,
  };

  Application.create(newApplication, (err, result) => {
    if (err) {
      console.error("Error creating application:", err);
      res.status(500).send("Error creating application");
      return;
    }
    console.log("Application created:", result);
    res.status(201).send("Application created");
  });
};

exports.findAll = (req, res) => {
  console.log("Fetching all applications");
  Application.findAll((err, results) => {
    if (err) {
      console.error("Error fetching applications:", err);
      res.status(500).send("Error fetching applications");
      return;
    }
    console.log("Applications fetched:", results);
    res.json(results);
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  console.log(`Fetching application with id: ${id}`);

  Application.findById(id, (err, result) => {
    if (err) {
      console.error("Error fetching application:", err);
      res.status(500).send("Error fetching application");
      return;
    }
    if (!result) {
      console.log(`Application with id ${id} not found`);
      res.status(404).send("Application not found");
      return;
    }
    console.log(`Application with id ${id} fetched:`, result);
    res.json(result);
  });
};

exports.findByJobId = (req, res) => {
  const job_id = req.params.job_id;
  console.log(`Fetching applications with job_id: ${job_id}`);

  Application.findByJobId(job_id, (err, results) => {
    if (err) {
      console.error("Error fetching applications:", err);
      res.status(500).send("Error fetching applications");
      return;
    }
    if (!results) {
      console.log(`Applications with job_id ${job_id} not found`);
      res.status(404).send("Applications not found");
      return;
    }
    console.log(`Applications with job_id ${job_id} fetched:`, results);
    res.json(results);
  });
};

exports.findByJobSeekerId = (req, res) => {
  const job_seeker_id = req.params.job_seeker_id;
  console.log(`Fetching applications with job_seeker_id: ${job_seeker_id}`);

  Application.findByJobSeekerId(job_seeker_id, (err, results) => {
    if (err) {
      console.error("Error fetching applications:", err);
      res.status(500).send("Error fetching applications");
      return;
    }
    if (!results) {
      console.log(`Applications with job_seeker_id ${job_seeker_id} not found`);
      res.status(404).send("Applications not found");
      return;
    }
    console.log(
      `Applications with job_seeker_id ${job_seeker_id} fetched:`,
      results
    );
    res.json(results);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(`Updating application with id: ${id}`);
  const updatedApplication = {
    cover_letter: req.body.cover_letter,
    resume: req.body.resume,
  };

  Application.update(id, updatedApplication, (err, result) => {
    if (err) {
      console.error("Error updating application:", err);
      res.status(500).send("Error updating application");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Application with id ${id} not found`);
      res.status(404).send("Application not found");
      return;
    }
    console.log(`Application with id ${id} updated:`, result);
    res.send("Application updated");
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting application with id: ${id}`);

  Application.delete(id, (err, result) => {
    if (err) {
      console.error("Error deleting application:", err);
      res.status(500).send("Error deleting application");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Application with id ${id} not found`);
      res.status(404).send("Application not found");
      return;
    }
    console.log(`Application with id ${id} deleted:`, result);
    res.send("Application deleted");
  });
};

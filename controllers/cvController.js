const CV = require("../models/cvModel");

exports.create = (req, res) => {
  console.log("Creating a new CV:", req.body);
  const newCV = {
    job_seeker_id: req.body.job_seeker_id,
    photo_url: req.body.photo_url,
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
    phone_number: req.body.phone_number,
  };

  CV.create(newCV, (err, result) => {
    if (err) {
      console.error("Error creating CV:", err);
      res.status(500).send("Error creating CV");
      return;
    }
    console.log("CV created:", result);
    res.status(201).send("CV created");
  });
};

exports.findAll = (req, res) => {
  console.log("Fetching all CVs");
  CV.findAll((err, results) => {
    if (err) {
      console.error("Error fetching CVs:", err);
      res.status(500).send("Error fetching CVs");
      return;
    }
    console.log("CVs fetched:", results);
    res.json(results);
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  console.log(`Fetching CV with id: ${id}`);

  CV.findById(id, (err, result) => {
    if (err) {
      console.error("Error fetching CV:", err);
      res.status(500).send("Error fetching CV");
      return;
    }
    if (!result) {
      console.log(`CV with id ${id} not found`);
      res.status(404).send("CV not found");
      return;
    }
    console.log(`CV with id ${id} fetched:`, result);
    res.json(result);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(`Updating CV with id: ${id}`);
  const updatedCV = {
    photo_url: req.body.photo_url,
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
    phone_number: req.body.phone_number,
  };

  CV.update(id, updatedCV, (err, result) => {
    if (err) {
      console.error("Error updating CV:", err);
      res.status(500).send("Error updating CV");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`CV with id ${id} not found`);
      res.status(404).send("CV not found");
      return;
    }
    console.log(`CV with id ${id} updated:`, result);
    res.send("CV updated");
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting CV with id: ${id}`);

  CV.delete(id, (err, result) => {
    if (err) {
      console.error("Error deleting CV:", err);
      res.status(500).send("Error deleting CV");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`CV with id ${id} not found`);
      res.status(404).send("CV not found");
      return;
    }
    console.log(`CV with id ${id} deleted:`, result);
    res.send("CV deleted");
  });
};

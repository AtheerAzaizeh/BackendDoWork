const Education = require("../models/educationModel");

exports.create = (req, res) => {
  console.log("Creating a new education:", req.body);
  const newEducation = {
    cv_id: req.body.cv_id,
    academic_name: req.body.academic_name,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
  };

  Education.create(newEducation, (err, result) => {
    if (err) {
      console.error("Error creating education:", err);
      res.status(500).send("Error creating education");
      return;
    }
    console.log("Education created:", result);
    res.status(201).send("Education created");
  });
};

exports.findAll = (req, res) => {
  console.log("Fetching all education entries");
  Education.findAll((err, results) => {
    if (err) {
      console.error("Error fetching education entries:", err);
      res.status(500).send("Error fetching education entries");
      return;
    }
    console.log("Education entries fetched:", results);
    res.json(results);
  });
};

exports.findByCVId = (req, res) => {
  const cv_id = req.params.cv_id;
  console.log(`Fetching education entries with cv_id: ${cv_id}`);

  Education.findByCVId(cv_id, (err, results) => {
    if (err) {
      console.error("Error fetching education entries:", err);
      res.status(500).send("Error fetching education entries");
      return;
    }
    if (!results) {
      console.log(`Education entries with cv_id ${cv_id} not found`);
      res.status(404).send("Education entries not found");
      return;
    }
    console.log(`Education entries with cv_id ${cv_id} fetched:`, results);
    res.json(results);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(`Updating education with id: ${id}`);
  const updatedEducation = {
    academic_name: req.body.academic_name,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
  };

  Education.update(id, updatedEducation, (err, result) => {
    if (err) {
      console.error("Error updating education:", err);
      res.status(500).send("Error updating education");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Education with id ${id} not found`);
      res.status(404).send("Education not found");
      return;
    }
    console.log(`Education with id ${id} updated:`, result);
    res.send("Education updated");
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting education with id: ${id}`);

  Education.delete(id, (err, result) => {
    if (err) {
      console.error("Error deleting education:", err);
      res.status(500).send("Error deleting education");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Education with id ${id} not found`);
      res.status(404).send("Education not found");
      return;
    }
    console.log(`Education with id ${id} deleted:`, result);
    res.send("Education deleted");
  });
};

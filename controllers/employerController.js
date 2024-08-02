const Employer = require("../models/employerModel");

exports.create = (req, res) => {
  console.log("Creating a new employer:", req.body);
  const newEmployer = {
    company_name: req.body.company_name,
    company_description: req.body.company_description,
    contact_email: req.body.contact_email,
    employee_seeker_id: req.body.employee_seeker_id,
  };

  Employer.create(newEmployer, (err, result) => {
    if (err) {
      console.error("Error creating employer:", err);
      res.status(500).send("Error creating employer");
      return;
    }
    console.log("Employer created:", result);
    res.status(201).send("Employer created");
  });
};

exports.findAll = (req, res) => {
  console.log("Fetching all employers");
  Employer.findAll((err, results) => {
    if (err) {
      console.error("Error fetching employers:", err);
      res.status(500).send("Error fetching employers");
      return;
    }
    console.log("Employers fetched:", results);
    res.json(results);
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  console.log(`Fetching employer with id: ${id}`);

  Employer.findById(id, (err, result) => {
    if (err) {
      console.error("Error fetching employer:", err);
      res.status(500).send("Error fetching employer");
      return;
    }
    if (!result) {
      console.log(`Employer with id ${id} not found`);
      res.status(404).send("Employer not found");
      return;
    }
    console.log(`Employer with id ${id} fetched:`, result);
    res.json(result);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(`Updating employer with id: ${id}`);
  const updatedEmployer = {
    company_name: req.body.company_name,
    company_description: req.body.company_description,
    contact_email: req.body.contact_email,
    employee_seeker_id: req.body.employee_seeker_id,
  };

  Employer.update(id, updatedEmployer, (err, result) => {
    if (err) {
      console.error("Error updating employer:", err);
      res.status(500).send("Error updating employer");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Employer with id ${id} not found`);
      res.status(404).send("Employer not found");
      return;
    }
    console.log(`Employer with id ${id} updated:`, result);
    res.send("Employer updated");
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting employer with id: ${id}`);

  Employer.delete(id, (err, result) => {
    if (err) {
      console.error("Error deleting employer:", err);
      res.status(500).send("Error deleting employer");
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`Employer with id ${id} not found`);
      res.status(404).send("Employer not found");
      return;
    }
    console.log(`Employer with id ${id} deleted:`, result);
    res.send("Employer deleted");
  });
};

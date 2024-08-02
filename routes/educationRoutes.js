const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");

console.log("Setting up education routes");

router.post("/", (req, res) => {
  console.log("POST /education");
  educationController.create(req, res);
});

router.get("/", (req, res) => {
  console.log("GET /education");
  educationController.findAll(req, res);
});

router.get("/cv/:cv_id", (req, res) => {
  console.log("GET /education/cv/:cv_id");
  educationController.findByCVId(req, res);
});

router.put("/:id", (req, res) => {
  console.log("PUT /education/:id");
  educationController.update(req, res);
});

router.delete("/:id", (req, res) => {
  console.log("DELETE /education/:id");
  educationController.delete(req, res);
});

module.exports = router;

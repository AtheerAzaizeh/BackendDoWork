const express = require("express");
const router = express.Router();
const cvController = require("../controllers/cvController");

console.log("Setting up CV routes");

router.post("/", (req, res) => {
  console.log("POST /cvs");
  cvController.create(req, res);
});

router.get("/", (req, res) => {
  console.log("GET /cvs");
  cvController.findAll(req, res);
});

router.get("/:id", (req, res) => {
  console.log("GET /cvs/:id");
  cvController.findById(req, res);
});

router.put("/:id", (req, res) => {
  console.log("PUT /cvs/:id");
  cvController.update(req, res);
});

router.delete("/:id", (req, res) => {
  console.log("DELETE /cvs/:id");
  cvController.delete(req, res);
});

module.exports = router;

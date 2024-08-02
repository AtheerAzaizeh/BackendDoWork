const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");

console.log("Setting up application routes");

router.post("/", (req, res) => {
  console.log("POST /applications");
  applicationController.create(req, res);
});

router.get("/", (req, res) => {
  console.log("GET /applications");
  applicationController.findAll(req, res);
});

router.get("/:id", (req, res) => {
  console.log("GET /applications/:id");
  applicationController.findById(req, res);
});

router.get("/job/:job_id", (req, res) => {
  console.log("GET /applications/job/:job_id");
  applicationController.findByJobId(req, res);
});

router.get("/job_seeker/:job_seeker_id", (req, res) => {
  console.log("GET /applications/job_seeker/:job_seeker_id");
  applicationController.findByJobSeekerId(req, res);
});

router.put("/:id", (req, res) => {
  console.log("PUT /applications/:id");
  applicationController.update(req, res);
});

router.delete("/:id", (req, res) => {
  console.log("DELETE /applications/:id");
  applicationController.delete(req, res);
});

module.exports = router;

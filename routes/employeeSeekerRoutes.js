const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const employeeSeekerController = require("../controllers/employeeSeekerController");

console.log("Setting up employee seeker routes");

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/", upload.single("profile-picture"), (req, res) => {
  console.log("POST /employeeSeekers");
  employeeSeekerController.create(req, res);
});

router.get("/", (req, res) => {
  console.log("GET /employeeSeekers");
  employeeSeekerController.findAll(req, res);
});

router.get("/:id", (req, res) => {
  console.log("GET /employeeSeekers/:id");
  employeeSeekerController.findById(req, res);
});

router.put("/:id", upload.single("profile-picture"), (req, res) => {
  console.log("PUT /employeeSeekers/:id");
  employeeSeekerController.update(req, res);
});

router.delete("/:id", (req, res) => {
  console.log("DELETE /employeeSeekers/:id");
  employeeSeekerController.delete(req, res);
});

module.exports = router;

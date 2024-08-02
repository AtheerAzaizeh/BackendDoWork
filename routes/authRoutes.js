const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.get("/profile-picture", authController.getProfilePicture);

module.exports = router;

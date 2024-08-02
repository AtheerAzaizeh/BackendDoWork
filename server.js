const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");

const port = 3010;
const cors = require("cors");
const employeeSeekerRoutes = require("./routes/employeeSeekerRoutes");
const jobSeekerRoutes = require("./routes/jobSeekerRoutes");
const employerRoutes = require("./routes/employerRoutes");
const jobRoutes = require("./routes/jobRoutes");
const cvRoutes = require("./routes/cvRoutes");
const skillRoutes = require("./routes/skillRoutes");
const workExperienceRoutes = require("./routes/workExperienceRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const educationRoutes = require("./routes/educationRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

console.log("Initializing middleware to parse JSON bodies");
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use("/auth", authRoutes); // Use the new login route

console.log("Initializing employee seeker routes");
app.use(
  "/employeeSeekers",
  upload.single("profile_picture"),
  employeeSeekerRoutes
);

console.log("Initializing job seeker routes");
app.use("/jobSeekers", upload.single("profile_picture"), jobSeekerRoutes);

console.log("Initializing employer routes");
app.use("/employers", employerRoutes);

console.log("Initializing job routes");
app.use("/jobs", jobRoutes);

console.log("Initializing CV routes");
app.use("/cvs", cvRoutes);

console.log("Initializing skill routes");
app.use("/skills", skillRoutes);

console.log("Initializing work experience routes");
app.use("/workExperiences", workExperienceRoutes);

console.log("Initializing application routes");
app.use("/applications", applicationRoutes);

console.log("Initializing education routes");
app.use("/education", educationRoutes);

// Error handling middleware
app.use((req, res, next) => {
  console.error(`Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).send("Server Error");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

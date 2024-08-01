const express = require("express");
const app = express();
const port = 3000;
const employeeSeekerRoutes = require("./routes/employeeSeekerRoutes");
const jobSeekerRoutes = require("./routes/jobSeekerRoutes");
const employerRoutes = require("./routes/employerRoutes");
const jobRoutes = require("./routes/jobRoutes");
const cvRoutes = require("./routes/cvRoutes");
const skillRoutes = require("./routes/skillRoutes");
const workExperienceRoutes = require("./routes/workExperienceRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const educationRoutes = require("./routes/educationRoutes");

console.log("Initializing middleware to parse JSON bodies");
app.use(express.json());

console.log("Initializing employee seeker routes");
app.use("/employeeSeekers", employeeSeekerRoutes);

console.log("Initializing job seeker routes");
app.use("/jobSeekers", jobSeekerRoutes);

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

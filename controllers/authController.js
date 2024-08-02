const User = require("../models/userModel");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, userType } = await User.findByEmail(email);

    if (!user) {
      console.log("User not found with email:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("User found:", user);
    console.log("User type:", userType);

    // Directly compare the password
    if (password !== user.password) {
      console.log("Password does not match for user:", user.email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Success
    console.log("Login successful for user:", user.email);
    return res.status(200).json({
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email,
        profilePictureUrl: user.profilePictureUrl, // Make sure this field exists in your database
        userType: userType, // Include the userType in the response
      },
    });
  } catch (err) {
    console.error("Error finding user:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getProfilePicture = async (req, res) => {
  const email = req.query.email;
  console.log("Fetching profile picture for email:", email);

  try {
    const { user } = await User.findByEmail(email);

    if (!user) {
      console.log("User not found for email:", email);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user);
    console.log("Profile picture URL:", user.profile_picture);

    return res.status(200).json({ profilePictureUrl: user.profile_picture });
  } catch (err) {
    console.error("Error finding user:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

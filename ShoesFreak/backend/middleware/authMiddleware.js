const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWT_SECRET = "ThisisJwtToken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.header("Authorization"); // Get the Authorization header
  
  // Check if the Authorization header exists and has the Bearer format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Please authenticate" });
  }

  // Extract the token by removing the 'Bearer ' prefix
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Find the user by ID from the decoded token
    const user = await User.findById(decoded.user.id);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Attach the user to the request object
    req.user = user;

    // Continue to the next middleware
    next();
  } catch (error) {
    console.log("Authentication Error:", error);
    res.status(401).json({ error: "Please authenticate 77" });
  }
};

module.exports = authMiddleware;

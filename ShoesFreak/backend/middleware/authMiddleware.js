const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWT_SECRET = "ThisisJwtToken";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  // console.log(token);  //yo aairaxa

  if (!token) return res.status(401).json({ error: "Please authenticate" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.user.id);

    if (!user) return res.status(401).json({ error: "User not found" });

    req.user = user;

    next();
  } catch (error) {
    console.log("Authentication Error:", error);
    res.status(401).json({ error: "Please authenticate 77" });
  }
};

module.exports = authMiddleware;

const jwt = require("jsonwebtoken");
const JWT_SECRET = "ThisisJwtToken";

const fetchuser = (req, res, next) => {
  const authHeader = req.header("Authorization"); // Get the Authorization header
  
  // Check if the Authorization header exists and has the Bearer format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Please authenticate" });
  }

  // Extract the token by removing the 'Bearer ' prefix
  const token = authHeader.split(" ")[1];
  
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using valid token" });
  }
};

module.exports = fetchuser;

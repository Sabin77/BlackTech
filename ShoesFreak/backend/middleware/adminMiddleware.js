const adminMiddleware = (req, res, next) => {
  const user = req.user; // Assume req.user is set after authentication middleware
  // console.log(user.role);
  if (user.role === "admin") {
    next(); // User is admin, allow access
  } else {
    res.status(403).json({ error: "Access denied, admin role required" });
  }
};

module.exports = adminMiddleware;

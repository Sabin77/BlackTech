// utils/adminUtils.js
const User = require("../models/User");

const assignAdminRole = async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    user.role = "admin";
    await user.save();
    // console.log(`User ${user.username} is now an admin.`);
  } else {
    console.log("User not found.");
  }
};
assignAdminRole("sabin123@gmail.com");

module.exports = { assignAdminRole };

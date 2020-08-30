const mongoose = require("mongoose");
const role = require("../auth/role");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  joined: { type: Date, default: Date.now },
  rank: { type: Number, default: 0 },
  role: { type: String, enum: [role.USER, role.ADMIN], default: role.USER },
});

module.exports = mongoose.model("User", UserSchema);

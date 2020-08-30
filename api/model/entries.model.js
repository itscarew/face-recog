const mongoose = require("mongoose");

const EntriesSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  created: { type: Date, default: Date.now },
  user: { type: String, ref: "User", required: true },
});

module.exports = mongoose.model("Entries", EntriesSchema);

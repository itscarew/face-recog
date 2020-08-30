const express = require("express");
const router = express.Router();

const checkAuth = require("../auth/check-auth");
const checkAdmin = require("../auth/check-admin");
const {
  get_all_entries,
  create_an_entry,
} = require("../controller/entries.controller");

//route to get all entries
router.get("/", checkAuth, checkAdmin, get_all_entries);

//route to create an entries
router.post("/", checkAuth, create_an_entry);

module.exports = router;

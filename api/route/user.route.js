const express = require("express");
const router = express.Router();

const checkAuth = require("../auth/check-auth");
const checkAdmin = require("../auth/check-admin");

const {
  get_all_users,
  signup_user,
  signin_user,
  get_user_profile,
  delete_user_profile,
  update_user_profile,
  update_user_profile_password,
  increment_user_entry,
} = require("../controller/user.controller");

const {
  get_user_profile_entries,
  delete_user_profile_entry,
} = require("../controller/entries.controller");

//get all user route
router.get("/", checkAuth, checkAdmin, get_all_users);

//signup user route
router.post("/signup", signup_user);

//signin user route
router.post("/signin", signin_user);

//get profile route
router.get("/profile", checkAuth, get_user_profile);

//delete profile/account route
router.delete("/profile", checkAuth, delete_user_profile);

//update user profile route
router.patch("/profile", checkAuth, update_user_profile);

//update user profile password route
router.patch("/profile/password", checkAuth, update_user_profile_password);

//route to increment entries of a particular user
router.put("/profile/entry", checkAuth, increment_user_entry);

//get all user profile entries route
router.get("/profile/entries", checkAuth, get_user_profile_entries);

//delete user profile article route
router.delete(
  "/profile/entries/:entriesId",
  checkAuth,
  delete_user_profile_entry
);

module.exports = router;

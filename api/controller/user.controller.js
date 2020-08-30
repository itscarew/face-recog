const User = require("../model/user.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//get all users controller
exports.get_all_users = (req, res) => {
  User.find()
    .exec()
    .then((user) => {
      res.status(200).json({ data: user });
    })
    .catch((err) => {
      res.status(400).json({ err: err.message });
    });
};

//signup user controller
exports.signup_user = (req, res) => {
  const { name, email, password, role, rank } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ err: "Please enter all fields" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ err: "Password must be at least 6 characters" });
  } else
    User.find({ email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          return res.status(409).json({
            err: "Email already exists",
          });
        } else {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              return res.status(404).json({
                err: err.message,
              });
            } else {
              const user = new User({
                name,
                email,
                password: hash,
                role,
                rank,
              });
              return user
                .save()
                .then((user) => {
                  res.status(201).json({
                    data: user,
                  });
                })
                .catch((err) => {
                  res.status(400).json({ err: err.message });
                });
            }
          });
        }
      });
};

//signin user controller
exports.signin_user = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ err: "Please enter all fields" });
  } else
    User.findOne({ email })
      .exec()
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            err: "This user does not exist !",
          });
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            return res.status(401).json({
              err: err.message,
            });
          } else if (result) {
            const token = jwt.sign(
              {
                name: user.name,
                email: user.email,
                userId: user._id,
                role: user.role,
              },
              "secret"
            );
            return res.status(200).json({
              token: token,
              data: user,
            });
          } else
            res.status(401).json({
              err: "Incorrect password !",
            });
        });
      })
      .catch((err) => {
        res.status(400).json({
          err: err.message,
        });
      });
};

//get user profile controller
exports.get_user_profile = (req, res) => {
  User.findOne({ _id: req.user.userId })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(404).json({ err: "No user is logged in" });
      } else res.status(200).json({ data: user });
    })
    .catch((err) => {
      res.status(400).json({ err: err.message });
    });
};

//delete user profile controller
exports.delete_user_profile = (req, res) => {
  User.deleteOne({ _id: req.user.userId })
    .exec()
    .then(() => {
      res.status(200).json({
        message: "You just deleted your account",
      });
    })
    .catch((err) => {
      res.status(400).json({
        err: err.message,
      });
    });
};

//update user profile controller
exports.update_user_profile = (req, res) => {
  const { userId } = req.user;
  const { name, email } = req.body;
  User.find({
    _id: { $nin: userId },
  }).then((user) => {
    if (user.find((user) => user.email === email)) {
      res.status(409).json({
        err: `${email} has already been taken. choose another email address`,
      });
    } else {
      User.updateOne({ _id: userId }, { $set: { name, email } })
        .exec()
        .then((user) => {
          res.status(200).json({
            data: user,
          });
        })
        .catch((err) => {
          res.status(400).json({
            err: err.message,
          });
        });
    }
  });
};

//update user profile password controller
exports.update_user_profile_password = (req, res) => {
  const { userId } = req.user;
  const { password } = req.body;
  if (password.length < 6) {
    return res
      .status(400)
      .json({ err: "Password must be at least 6 characters" });
  } else
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(404).json({
          err: err.message,
        });
      } else {
        User.updateOne({ _id: userId }, { $set: { password: hash } })
          .exec()
          .then((user) => {
            res.status(200).json({
              data: user,
            });
          })
          .catch((err) => {
            res.status(400).json({
              err: err.message,
            });
          });
      }
    });
};

exports.increment_user_entry = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user.userId },
    { $inc: { rank: +1 } },
    { new: true }
  )
    .exec()
    .then((user) => {
      res.status(200).json({ data: user });
    })
    .catch((err) => {
      res.status(400).json({
        err: err.message,
      });
    });
};

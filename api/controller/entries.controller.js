const Entries = require("../model/entries.model");

exports.get_all_entries = (req, res) => {
  Entries.find()
    .exec()
    .then((entries) => {
      res.status(200).json({ data: entries });
    })
    .catch((err) => {
      res.status(400).json({ err: err.message });
    });
};

exports.create_an_entry = (req, res) => {
  const entry = new Entries({
    imageUrl: req.body.imageUrl,
    user: req.user.userId,
  });

  return entry
    .save()
    .then((entry) => {
      res.status(201).json({
        data: entry,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err: err.message,
      });
    });
};

exports.get_user_profile_entries = (req, res) => {
  const { userId } = req.user;
  Entries.find({ user: userId })
    .populate("user")
    .exec()
    .then((entry) => {
      res.status(200).json({ data: entry });
    })
    .catch((err) => {
      err: err.message;
    });
};

exports.delete_user_profile_entry = (req, res) => {
  const { entriesId } = req.params;
  const { userId } = req.user;
  Entries.deleteOne({ $and: [{ _id: entriesId }, { user: userId }] })
    .exec()
    .then((article) => {
      res.status(200).json({ data: article });
    })
    .catch((err) => {
      res.status(400).json({ err: err.message });
    });
};

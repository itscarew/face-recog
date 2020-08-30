const jwt = require("jsonwebtoken");
const role = require("./role");

//Verification of a user, to check if a user is an admin or not
module.exports = (req, res, next) => {
  try {
    //Get token from the header
    const token = req.headers.authorization.split(" ")[1];
    //Verify the token with jsonwebtoken
    const user = jwt.verify(token, "secret");
    if (user.role === role.ADMIN) {
      req.user = user;
      next();
    } else {
      PromiseRejectionEvent();
    }
  } catch (err) {
    return res.status(403).json({
      err: "You don't have the priviledge to access this route !!",
    });
  }
};

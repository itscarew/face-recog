const jwt = require("jsonwebtoken");

//Verification of a user, to check if a user exists and the user is logged in or not
module.exports = (req, res, next) => {
  try {
    //Get token from the header
    const token = req.headers.authorization.split(" ")[1];
    //Verify the token with jsonwebtoken
    const user = jwt.verify(token, "secret");
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      err: "Authentication failed",
    });
  }
};

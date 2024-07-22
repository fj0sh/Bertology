const authModel = require("../model/auth.model");

exports.registerUser = (req, res) => {
  authModel.registerUser(req.body, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

exports.getAllUsers = (req, res) => {
  authModel.getUser((err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

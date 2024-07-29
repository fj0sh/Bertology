const {
  registerValidator,
  validate,
} = require("../middlewares/validators/authValidator");
const authModel = require("../model/auth.model");

exports.registerUser = [
  registerValidator(),
  validate,
  (req, res) => {
    authModel.registerUser(req.body, (err, result) => {
      console.log(req.body);
      if (err) {
        console.error("Error in insertUser:", err.message);
        return res.status(500).send("Internal Server Error");
      }
      res.status(201).send(result);
    });
  },
];

exports.getAllUsers = (req, res) => {
  authModel.getUser((err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

exports.loginUser = (req, res) => {
  authModel.loginUser(req.body, (err, user) => {
    if (err) {
      return res.status(500).send("Error logging in");
    }
    if (!user) {
      return res.status(400).send("User not found");
    }

    res.send(user);
  });
};

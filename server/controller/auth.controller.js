var jwt = require("jsonwebtoken");

const {
  registerValidator,
  validate,
} = require("../middlewares/validators/authValidator");
const authModel = require("../model/auth.model");

const jwtSecret = process.env.JWT_SECRET;

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

exports.getUserById = (req, res) => {
  authModel.getUserById(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

exports.loginUser = (req, res) => {
  authModel.loginUser(req.body, (err, result) => {
    if (err) {
      console.log("Error in loginUser:", err.message);
      return res.status(401).send("Invalid credentials");
    }
    if (result == "") {
      return res.status(404).send("User Not Found");
    }

    const token = jwt.sign(
      { id: result[0].id, username: result[0].username, role: result[0].role },
      jwtSecret,
      { expiresIn: 60 * 60 * 6 }
    );

    console.log(token);

    res.status(200).send({
      token,
      user: {
        id: result[0].id,
        username: result[0].username,
        role: result[0].role,
      },
    });
  });
};

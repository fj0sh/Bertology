const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const {
  registerValidator,
  validate,
} = require("../middlewares/validators/authValidator");
const authModel = require("../model/auth.model");

const jwtSecret = process.env.JWT_SECRET;

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

    res.setHeader(
      "Set-Header",
      cookie.serialize("token", token, {
        httpOnly: true,
        expiresIn: 60 * 60 * 6,
        path: "/",
      })
    );

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

exports.getUserByEmail = (req, res) => {
  authModel.getUserByEmail(req.body.email, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }

    if (result.length === 0) {
      return res
        .status(404)
        .send({ error: false, message: "Email is not registered" });
    } else {
      return res.status(200).send(result);
    }
  });
};

exports.changePassword = (req, res) => {
  authModel.changePassword(req.body.password, req.body.id, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

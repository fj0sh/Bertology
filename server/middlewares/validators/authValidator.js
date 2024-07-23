const { body, validationResult } = require("express-validator");

exports.registerValidator = () => {
  return [
    body("username").notEmpty().withMessage("username Required"),
    body("emailAddress").notEmpty().isEmail().withMessage("email Required"),
    body("phoneNumber")
      .notEmpty()
      .withMessage()
      .isLength({ max: 10, min: 9 })
      .isNumeric(),
  ];
};

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

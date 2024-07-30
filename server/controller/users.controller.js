const usersModel = require("../model/users.model");

exports.getCustomers = (req, res) => {
  usersModel.getCustomer((err, result) => {
    if (err) {
      console.log(err.message);
      return res.status(400).send("Error: " + err.message);
    }

    return res.status(200).send(result);
  });
};

exports.getCustomerById = (req, res) => {
  usersModel.getCustomerById(req.params.id, (err, result) => {
    if (err) {
      console.log(err.message);
      return res.status(400).send("Error: " + err.message);
    }
    return res.status(200).send(result);
  });
};

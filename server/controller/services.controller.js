const serviceModel = require("../model/services.model");

exports.getAllServices = (req, res) => {
  serviceModel.getAllServices((err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

exports.getServiceById = (req, res) => {
  serviceModel.getServiceById(req.params.id, (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    console.log(result);
    res.send(result);
  });
};

exports.getAllBookedDates = (req, res) => {
  serviceModel.getBookedDates((err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

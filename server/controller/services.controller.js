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

exports.getAllBookedDates = (req, res) => {
  serviceModel.getBookedDates((err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

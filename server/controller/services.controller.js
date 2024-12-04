const serviceModel = require("../model/services.model");

exports.getAllServices = (req, res) => {
  serviceModel.getAllServices((err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    return res.status(200).send(result);
  });
};

exports.getServiceById = (req, res) => {
  serviceModel.getServiceById(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

exports.getFullyBookedDates = (req, res) => {
  serviceModel.getFullyBookedDates((err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

exports.getDateInfo = (req, res) => {
  const { date } = req.body; // Destructure `date` from req.body

  serviceModel.getDateInformation(date, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

exports.addService = (req, res) => {
  serviceModel.addService(req.body, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(201).send(result);
  });
};

exports.editService = (req, res) => {
  serviceModel.editService(req.params.id, req.body, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

exports.deleteService = (req, res) => {
  serviceModel.deleteService(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

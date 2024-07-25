const testModel = require("../model/test.model");

exports.getAllTest = (req, res) => {
  testModel.getTest((err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

exports.addTest = (req, res) => {
  console.log(req.body);
  testModel.addTest(req.body, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

exports.updateTest = (req, res) => {
  console.log(req.body);
  console.log(req.params);

  testModel.updateTest(req.params.id, req.body, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

exports.deleteTest = (req, res) => {
  testModel.deleteTest(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

exports.getById = (req, res) => {
  testModel.getById(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
};

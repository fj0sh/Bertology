const prodModel = require("../model/products.model");
exports.getAllProducts = (req, res) => {
  prodModel.getAllProducts((err, results) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.send(results);
  });
};

exports.getById = (req, res) => {
  prodModel.getProductById(req.params.id, (err, results) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.send(results[0]);
  });
};

exports.addProduct = (req, res) => {
  console.log(req.body);
  prodModel.addProduct(req.body, (err, results) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.send(results);
  });
};

exports.getTypes = (req, res) => {
  prodModel.getType((err, results) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.send(results);
  });
};

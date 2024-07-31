const prodModel = require("../model/products.model");
exports.getAllProducts = (req, res) => {
  prodModel.getAllProducts((err, results) => {
    if (err) {
      return res.status(400).send(err);
    }

    res.send(results);
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

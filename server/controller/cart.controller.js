const cartModel = require("../model/cart.model");

exports.addToCart = (req, res) => {
  cartModel.addToCart(req.body.userId, req.params.id, (err, result) => {
    if (err) {
      res.status(400).send("nope");
    }

    res.status(200).send(result);
  });
};

exports.displayCartProducts = (req, res) => {
  cartModel.getUserCart(req.body.userId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
};

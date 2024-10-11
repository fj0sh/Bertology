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
      return res.status(400).send(err);
    }

    // Assuming `result` is an array of products in the cart
    const formattedResult = result.map((item) => ({
      user: {
        id: item.userId,
      },
      product: {
        id: item.productId,
        productName: item.productName,
        description: item.description,
        price: item.price,
        stocks: item.stocks,
        type: item.productType,
        amountSold: item.amountSold,
        productImage: item.productImage,
        isDeleted: item.isDeleted,
        dateAdded: item.dateAdded,
      },
    }));

    console.log(formattedResult);
    res.status(200).send(formattedResult);
  });
};

exports.removeCartProduct = (req, res) => {
  cartModel.removeCartProducts(
    req.body.userId,
    req.params.id,
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      }
      console.log(result);
      res.status(200).send(result);
    }
  );
};

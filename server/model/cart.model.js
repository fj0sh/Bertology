const conn = require("../config/db-config");

exports.addToCart = (userId, productId, callback) => {
  conn.query(
    "insert into cart (userId, productId) values (?,?)",
    [userId, productId],
    callback
  );
};

exports.getUserCart = (userId, callback) => {
  conn.query(
    "select * from products join cart on products.id = cart.productId where userId = ?",
    [userId],
    callback
  );
};

exports.deleteCartProduct = (userId, productId, callback) => {
  conn.query(
    "DELETE FROM cart WHERE userId =? AND productId =?",
    [userId, productId],
    callback
  );
};

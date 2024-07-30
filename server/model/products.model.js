const conn = require("../config/db-config");

exports.getAllProducts = (callback) => {
  conn.query(
    "SELECT * FROM products INNER JOIN product_category ON products.productCategory = product_category.id",
    callback
  );
};

const conn = require("../config/db-config");

exports.getAllProducts = (callback) => {
  conn.query(
    "SELECT * FROM products INNER JOIN product_category ON products.productCategory = product_category.id",
    callback
  );
};

exports.addProduct = (credentials, callback) => {
  const {
    productName,
    description,
    price,
    stocks,
    productCategory,
    productImage,
  } = credentials;

  conn.query(
    "INSERT INTO products(productName, description, price, stocks, productCategory, productImage, amountSold) VALUES (?,?,?,?,?,?,0)",
    [productName, description, price, stocks, productCategory, productImage],
    callback
  );
};

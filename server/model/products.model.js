const conn = require("../config/db-config");

exports.getAllProducts = (callback) => {
  conn.query(
    "SELECT products.id AS productId, products.productName, products.description, products.price, products.stocks, products.productImage, product_type.type AS type FROM products INNER JOIN product_type ON products.productType = product_type.id",
    callback
  );
};

exports.getProductById = (id, callback) => {
  conn.query("SELECT * FROM products WHERE id =?", id, callback);
};

exports.addProduct = (credentials, callback) => {
  const { productName, description, price, stocks, productType, productImage } =
    credentials;

  conn.query(
    "INSERT INTO products(productName, description, price, stocks, productType, productImage, amountSold) VALUES (?,?,?,?,?,?,0)",
    [productName, description, price, stocks, productType, productImage],
    callback
  );
};

exports.getType = (callback) => {
  conn.query(`SELECT * from product_type`, callback);
};

const conn = require("../config/db-config");

const getAllProducts = (callback) => {
  conn.query(
    "SELECT products.id AS productId, products.productName, products.description, products.price, products.stocks, products.productImage, product_type.type AS type FROM products INNER JOIN product_type ON products.productType = product_type.id",
    callback
  );
};

const getProductById = (id, callback) => {
  conn.query("SELECT * FROM products WHERE id =?", id, callback);
};

const addProduct = (credentials, callback) => {
  const { productName, description, price, stocks, productType, productImage } =
    credentials;

  conn.query(
    "INSERT INTO products(productName, description, price, stocks, productType, productImage, amountSold) VALUES (?,?,?,?,?,?,0)",
    [productName, description, price, stocks, productType, productImage],
    callback
  );
};

const getType = (callback) => {
  conn.query(`SELECT * from product_type`, callback);
};

const updateProduct = (credentials, id, callback) => {
  const { productName, description, price, stocks, productType, productImage } =
    credentials;

  conn.query(
    "UPDATE products SET productName=?, description=?, price=?, stocks=?, productType=?, productImage=? WHERE id=?",
    [productName, description, price, stocks, productType, productImage, id],
    callback
  );
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  getType,
  updateProduct,
};

const conn = require("../config/db-config");

exports.getAllProducts = (callback) => {
  conn.query("SELECT * FROM products", callback);
};

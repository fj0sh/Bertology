const conn = require("../config/db-config");

exports.getCustomer = (callback) => {
  conn.query("SELECT * FROM users where role = 'CUSTOMER' ", callback);
};

exports.getCustomerById = (id, callback) => {
  conn.query("SELECT * FROM users WHERE id = ?", id, callback);
};

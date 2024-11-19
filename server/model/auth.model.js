const conn = require("../config/db-config");

exports.loginUser = (credentials, callback) => {
  const { email, password } = credentials;

  conn.query(
    "SELECT * FROM users WHERE emailAddress = ? and password = ?",
    [email, password],
    callback
  );
};

exports.getUserById = (id, callback) => {
  conn.query("select * from users where id = ? ", id, callback);
};

exports.getLogInUser = (credentials, callback) => {
  const { email, password } = credentials;

  conn.query(
    "SELECT * FROM users where username = ? and password = ? ",
    [username, password],
    callback
  );
};

exports.getUserByEmail = (email, callback) => {
  conn.query("SELECT * FROM users WHERE emailAddress =?", email, callback);
};

exports.changePassword = (password, id, credentials) => {
  conn.query(
    "UPDATE users SET password = ? WHERE id = ?",
    [password, id],
    credentials
  );
};

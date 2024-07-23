const conn = require("../config/db-config");

exports.registerUser = (credentials, callback) => {
  const { firstname, lastname, phoneNumber, emailAddress, password, username } =
    credentials;

  conn.query(
    "insert into users(firstname, lastname, phoneNumber, emailAddress, password, username) values (?,?,?,?,?,?)",
    [firstname, lastname, phoneNumber, emailAddress, password, username],
    callback
  );
};

exports.getUser = (callback) => {
  conn.query("select * from users", callback);
};

exports.getLogInUser = (credentials, callback) => {
  const { username, password } = credentials;
};

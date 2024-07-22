const conn = require("../config/db-config");

exports.registerUser = () => {
  const { firstname, lastname, phoneNumber, emailAddress, password } =
    credentials;

  conn.query(
    "insert into users(firstname, lastname, phoneNumber, emailAddress, password) values (?,?,?,?,?)",
    credentials,
    callback
  );
};

exports.getUser = (callback) => {
  conn.query("select * from users", callback);
};

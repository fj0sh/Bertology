const conn = require("../config/db-config");

exports.registerUser = (credentials, callback) => {
  const { firstname, lastname, phoneNumber, emailAddress, password, username } =
    credentials;

  conn.query(
    "insert into users(firstname, lastname, phoneNumber, emailAddress, password, username, role) values (?,?,?,?,?,?,'CUSTOMER')",
    [firstname, lastname, phoneNumber, emailAddress, password, username],
    callback
  );
};

exports.loginUser = (credentials, callback) => {
  const { username, password } = credentials;

  conn.query(
    "SELECT * FROM users WHERE username = ? and password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        return callback(err);
      }

      if (results.length === 0) {
        return callback(null, { status: 401 });
      }

      const user = results[0];

      if (password != user.password) {
        return callback(null, { status: 401 });
      }

      callback(null, user);
    }
  );
};

exports.getUser = (callback) => {
  conn.query("select * from users", callback);
};

exports.getLogInUser = (credentials, callback) => {
  const { username, password } = credentials;
};

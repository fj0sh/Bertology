const conn = require("../config/db-config");

exports.getAllServices = (callback) => {
  conn.query("SELECT * FROM services", callback);
};

exports.getBookedDates = (callback) => {
  conn.query(
    "select booking.dateBooked, users.username, users.id users from booking inner join users on users.id = booking.userId",
    callback
  );
};

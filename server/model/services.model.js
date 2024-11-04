const conn = require("../config/db-config");

exports.getAllServices = (callback) => {
  conn.query("SELECT * FROM services", callback);
};

exports.getServiceById = (id, callback) => {
  conn.query("SELECT * FROM services WHERE id = ?", id, callback);
};

exports.getFullyBookedDates = (callback) => {
  conn.query(
    "SELECT bookedDate FROM booking GROUP BY bookedDate HAVING COUNT(*) >= 6",
    callback
  );
};

exports.getDateInformation = (date, callback) => {
  conn.query(
    "SELECT bookedDate FROM booking WHERE LEFT(bookedDate, 10) = ?;",
    [date],
    callback
  );
};

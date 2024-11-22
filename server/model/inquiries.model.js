const conn = require("../config/db-config");

exports.getInstallers = (callback) => {
  conn.query("SELECT * FROM inquiries", callback);
};

exports.addInquiry = (inquryData, callback) => {
  const { firstName, lastName, email, message } = inquryData;

  conn.query(
    "INSERT INTO inquiries (firstName, lastName, email, message) VALUES (?,?,?,?) ",
    [firstName, lastName, email, message],
    callback
  );
};

exports.resolveInquiry = (id, callback) => {
  conn.query(
    "UPDATE inquiries SET status = 'RESOLVED' WHERE id = ?",
    [id],
    callback
  );
};

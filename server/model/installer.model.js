const conn = require("../config/db-config");

exports.getInstallers = (callback) => {
  conn.query("SELECT * FROM installers", callback);
};

exports.addInstaller = (installerInformation, callback) => {
  const { firstName, lastName, address, phoneNumber, email, image } =
    installerInformation;

  conn.query(
    "INSERT INTO installers (firstName, lastName, address, phoneNumber, email, image) VALUES (?, ?, ?, ?, ?, ?) ",
    [firstName, lastName, address, phoneNumber, email, image],
    callback
  );
};

exports.assignInstaller = (installerId, bookingId, callback) => {
  conn.query(
    "UPDATE booking SET installerId = ? WHERE id = ?",
    [installerId, bookingId],
    callback
  );
};

exports.getAvailableInstallerForTheDay = (date, callback) => {
  conn.query(
    "SELECT * FROM installers WHERE id NOT IN (SELECT installerId FROM booking WHERE LEFT(bookedDate, 10) =?) AND available = 1",
    [date],
    callback
  );
};

exports.getInstallerById = (id, callback) => {
  conn.query("SELECT * FROM installers WHERE id =?", id, callback);
};

const conn = require("../config/db-config");

exports.getInstallers = (callback) => {
  conn.query("SELECT * FROM installers", callback);
};

exports.addInstaller = (installerInformation, callback) => {
  const {
    firstName,
    lastName,
    address,
    phoneNumber,
    email,
    image,
    experience,
  } = installerInformation;

  conn.query(
    "INSERT INTO installers (installerFirstName, installerLastName, installerAddress, installerPhoneNumber, installerEmail, installerImage, installerExperience) VALUES (?, ?, ?, ?, ?, ?,?) ",
    [firstName, lastName, address, phoneNumber, email, image, experience],
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
  conn.query("SELECT * FROM installers WHERE installerId =?", id, callback);
};

exports.editInstaller = (installerId, updatedInformation, callback) => {
  const {
    firstName,
    lastName,
    address,
    phoneNumber,
    email,
    image,
    experience,
    status,
  } = updatedInformation;

  conn.query(
    `UPDATE installers 
     SET installerFirstName = ?, 
         installerLastName = ?, 
         installerAddress = ?, 
         installerPhoneNumber = ?, 
         installerEmail = ?, 
         installerImage = ?, 
         installerExperience = ?,
         installerStatus = ?
     WHERE installerId = ?`,
    [
      firstName,
      lastName,
      address,
      phoneNumber,
      email,
      image,
      experience,
      status,
      installerId,
    ],
    callback
  );
};

exports.deleteInstaller = (id, callback) => {
  conn.query("DELETE FROM installers WHERE installerId = ?", id, callback);
};

exports.getInstallerBookings = (id, callback) => {
  conn.query(
    "SELECT b.id AS bookingId, b.bookedDate, b.status, b.carModel, b.mode, i.installerFirstName, i.installerLastName FROM booking b INNER JOIN installers i ON b.installerId = i.installerId WHERE i.installerId = 1",
    id,
    callback
  );
};

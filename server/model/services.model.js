const conn = require("../config/db-config");

exports.getAllServices = (callback) => {
  conn.query("SELECT * FROM services", callback);
};

exports.getServiceById = (id, callback) => {
  conn.query("SELECT * FROM services WHERE id = ?", id, callback);
};

exports.getFullyBookedDates = (callback) => {
  conn.query(
    "SELECT LEFT(bookedDate, 10) AS bookingDate, COUNT(*) AS bookingCount FROM booking WHERE STATUS = 'APPROVED' GROUP BY bookingDate HAVING bookingCount >= 12;",
    callback
  );
};

exports.getDateInformation = (date, callback) => {
  conn.query(
    "SELECT bookedDate FROM booking WHERE LEFT(bookedDate, 10) = ?",
    [date],
    callback
  );
};

exports.addService = (serviceData, callback) => {
  const { serviceName, servicePrice, serviceImage, serviceDescription } =
    serviceData;

  conn.query(
    "INSERT INTO services (serviceName, servicePrice, serviceImage, serviceDescription) values (?, ?, ?, ?)",
    [serviceName, servicePrice, serviceImage, serviceDescription],
    callback
  );
};

exports.editService = (id, serviceData, callback) => {
  const { serviceName, servicePrice, serviceImage, serviceDescription } =
    serviceData;

  conn.query(
    "UPDATE services SET serviceName = ?, servicePrice = ?, serviceImage = ?, serviceDescription = ? WHERE id = ?",
    [serviceName, servicePrice, serviceImage, serviceDescription, id],
    callback
  );
};

exports.deleteService = (id, callback) => {
  conn.query("DELETE FROM services WHERE id =?", id, callback);
};

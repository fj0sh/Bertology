const conn = require("../config/db-config");

exports.bookService = (bookingInformation, callback) => {
  const {
    firstName,
    lastName,
    email,
    contactNumber,
    municipality,
    barangay,
    landmark,
    carModel,
    additionalDetails,
    proofOfPayment,
    bookedDate,
    mode,
  } = bookingInformation;

  conn.query(
    "INSERT INTO booking (firstName, lastName, email, contactNumber, municipality, barangay, landmark, carModel, additionalDetails, proofOfPayment, bookedDate, status, mode ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'PENDING', ?)",
    [
      firstName,
      lastName,
      email,
      contactNumber,
      municipality,
      barangay,
      landmark,
      carModel,
      additionalDetails,
      proofOfPayment,
      bookedDate,
      mode,
    ],
    callback
  );
};

exports.getBookedServices = (callback) => {
  conn.query("SELECT * FROM booking", callback);
};

exports.getBookedServicesById = (id, callback) => {
  conn.query(
    "SELECT b.id, b.location, b.contact, b.serviceRequest, b.carModel, b.detail, b.serviceId, b.userId, b.dateBooked, b.status, b.payment_type, b.payment_proof, b.email, u.firstname, u.lastname, u.username, s.serviceName, s.serviceDescription, s.serviceDuration FROM booking AS b INNER JOIN users AS u ON u.id = b.userId INNER JOIN services AS s ON s.id = b.serviceId WHERE b.id = ?",
    id,
    callback
  );
};

exports.selectServiceTypes = (serviceTypeInformation, callback) => {
  const { serviceId, bookingId } = serviceTypeInformation;

  conn.query(
    "INSERT INTO booked_service (serviceId, bookingId) values (?,?)",
    [serviceId, bookingId],
    callback
  );
};

exports.getSelectedType = (bookingId, callback) => {
  conn.query(
    "SELECT s.* FROM booked_service bs JOIN services s ON bs.serviceId = s.id JOIN booking b ON bs.bookingId = b.id WHERE b.id = ?",
    bookingId,
    callback
  );
};

exports.confirmBooking = (bookingId, callback) => {
  conn.query(
    "UPDATE booking SET status = 'APPROVED' WHERE id = ?",
    bookingId,
    callback
  );
};
exports.declineBooking = (bookingId, callback) => {
  conn.query(
    "UPDATE booking SET status = 'DECLINED' WHERE id = ?",
    bookingId,
    callback
  );
};

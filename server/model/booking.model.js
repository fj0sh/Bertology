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
    serviceId,
    carModel,
    additionalDetails,
    proofOfPayment,
    bookedDate,
    OTP,
    mode,
  } = bookingInformation;

  conn.query(
    "INSERT INTO booking (firstName, lastName, email, contactNumber, municipality, barangay, landmark, serviceId, carModel, additionalDetails, proofOfPayment, bookedDate, status, OTP, mode ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'VERIFYING', ?, ?)",
    [
      firstName,
      lastName,
      email,
      contactNumber,
      municipality,
      barangay,
      landmark,
      serviceId,
      carModel,
      additionalDetails,
      proofOfPayment,
      bookedDate,
      OTP,
      mode,
    ],
    callback
  );
};

exports.getBookedServices = (callback) => {
  conn.query(
    "SELECT b.id, b.firstName, b.lastName, b.mode, b.email, b.contactNumber, b.municipality, b.barangay, b.landmark, b.serviceId, b.carModel, b.additionalDetails, b.proofOfPayment, b.bookedDate, s.serviceName, s.serviceDuration, s.servicePrice, b.status FROM booking AS b INNER JOIN services AS s ON s.id = b.serviceId",
    callback
  );
};

exports.getBookedServicesById = (id, callback) => {
  conn.query(
    "SELECT b.id, b.location, b.contact, b.serviceRequest, b.carModel, b.detail, b.serviceId, b.userId, b.dateBooked, b.status, b.payment_type, b.payment_proof, b.email, u.firstname, u.lastname, u.username, s.serviceName, s.serviceDescription, s.serviceDuration FROM booking AS b INNER JOIN users AS u ON u.id = b.userId INNER JOIN services AS s ON s.id = b.serviceId WHERE b.id = ?",
    id,
    callback
  );
};

exports.confirmBooking = (callback) => {
  conn.query("", callback);
};

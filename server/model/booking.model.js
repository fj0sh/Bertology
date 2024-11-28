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
    street,
  } = bookingInformation;

  conn.query(
    "INSERT INTO booking (firstName, lastName, email, contactNumber, municipality, barangay, landmark, carModel, additionalDetails, proofOfPayment, bookedDate, status, mode, street ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'PENDING', ?, ?)",
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
      street,
    ],
    callback
  );
};

exports.getBookedServices = (callback) => {
  conn.query(
    "SELECT * FROM booking b LEFT JOIN installers i ON b.installerId = i.installerId ",
    callback
  );
};

exports.getBookingByStatus = (status, callback) => {
  conn.query("SELECT * FROM booking WHERE status = ?", [status], callback);
};

exports.getBookingByDate = (date, callback) => {
  conn.query(
    "SELECT * FROM booking b LEFT JOIN installers i ON b.installerId = i.installerId   WHERE LEFT(bookedDate, 10) = ?",
    [date],
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

exports.setBookingAsDone = (bookingId, callback) => {
  conn.query(
    "UPDATE booking SET status = 'DONE' WHERE id = ?",
    bookingId,
    callback
  );
};

exports.deleteBooking = (bookingId, callback) => {
  conn.query("DELETE FROM booking WHERE id =?", bookingId, callback);
};

exports.getStatusCount = (callback) => {
  conn.query(
    "SELECT status, COUNT(*) AS count FROM booking WHERE status IN ('PENDING', 'DECLINED', 'DONE', 'APPROVED') GROUP BY status",
    callback
  );
};
exports.getMonthlySales = (callback) => {
  conn.query(
    "SELECT  MONTH(b.bookedDate) AS MONTH, YEAR(b.bookedDate) AS YEAR, SUM(s.servicePrice) AS total_sales FROM booked_service bs JOIN services s ON bs.serviceId = s.id JOIN booking b ON bs.bookingId = b.id WHERE b.status = 'DONE' GROUP BY YEAR(b.bookedDate), MONTH(b.bookedDate) ORDER BY YEAR, MONTH;",
    callback
  );
};

exports.markMissedBookings = (callback) => {
  conn.query(
    "UPDATE booking SET status = 'MISSED' WHERE DATE(bookedDate) < CURDATE() AND status = 'PENDING';",
    callback
  );
};

exports.declineReason = (body, callback) => {
  const { bookingId, reason } = body;

  conn.query(
    "INSERT INTO decline_reason (bookingId, reason) VALUES (?, ?)",
    [bookingId, reason],
    callback
  );
};

exports.getDeclineReasonById = (bookingId, callback) => {
  conn.query(
    "SELECT * FROM booking b JOIN decline_reason d d.bookingId = b.id "
  );
};

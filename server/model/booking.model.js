const conn = require("../config/db-config");

exports.bookService = (bookingInformation, callback) => {
  const {
    userId,
    serviceId,
    location,
    fbAccount,
    contact,
    serviceRequest,
    carModel,
    detail,
    dateBooked,
    paymentType,
  } = bookingInformation;

  conn.query(
    "insert into booking(userId, serviceId, location, fbAccount, contact, serviceRequest, carModel, detail, dateBooked, payment_type) values (?,?,?,?,?,?,?,?,?,?) ",
    [
      userId,
      serviceId,
      location,
      fbAccount,
      contact,
      serviceRequest,
      carModel,
      detail,
      dateBooked,
      paymentType,
    ],
    callback
  );
};

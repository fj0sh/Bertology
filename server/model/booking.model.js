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
  } = bookingInformation;

  conn.query(
    "insert into booking(userId, serviceId, location, fbAccount, contact, serviceRequest, carModel, detail, dateBooked) values (?,?,?,?,?,?,?,?,?) ",
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
    ],
    callback
  );
};

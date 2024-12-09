const conn = require("../config/db-config");

exports.getPayments = (callback) => {
  conn.query("SELECT * FROM payment_info ", callback);
};

exports.addPayment = (paymentData, callback) => {
  const { paymentName, paymentImage } = paymentData;

  conn.query(
    "INSERT INTO payment_info (paymentName, paymentImage) VALUES (?,?)"
  ),
    [paymentName, paymentImage],
    callback;
};

exports.editPayment = (paymentId, paymentData, callback) => {
  const { paymentName, paymentImage } = paymentData;

  conn.query(
    "UPDATE payment_info SET paymentName = ?, paymentImage = ? WHERE paymentId = ?",
    [paymentName, paymentImage, paymentId],
    callback
  );
};

// Delete a payment
exports.deletePayment = (paymentId, callback) => {
  conn.query(
    "DELETE FROM payment_info WHERE paymentId = ?",
    [paymentId],
    callback
  );
};

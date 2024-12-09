const paymentsModel = require("../model/payments.model");

exports.getPayment = (req, res) => {
  paymentsModel.getPayments((err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(result);
  });
};

exports.addPayment = (req, res) => {
  paymentsModel.addPayment(
    req.body.paymentName,
    req.body.paymentImage,
    (err, result) => {
      if (err) {
        return res.status(400).send(err);
      }
      res.status(200).send(result);
    }
  );
};

exports.editPayment = (req, res) => {
  const { paymentId } = req.params;
  const { paymentName, paymentImage } = req.body;

  if (!paymentId || !paymentName || !paymentImage) {
    return res
      .status(400)
      .send({ message: "Payment ID, name, and image are required" });
  }

  paymentsModel.editPayment(
    paymentId,
    { paymentName, paymentImage },
    (err, result) => {
      if (err) {
        console.error(err);
        return res
          .status(400)
          .send({ message: "Error editing payment", error: err });
      }
      res.status(200).send({ message: "Payment updated successfully", result });
    }
  );
};

// Delete a payment
exports.deletePayment = (req, res) => {
  const { paymentId } = req.params;

  if (!paymentId) {
    return res.status(400).send({ message: "Payment ID is required" });
  }

  paymentsModel.deletePayment(paymentId, (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .send({ message: "Error deleting payment", error: err });
    }
    res.status(200).send({ message: "Payment deleted successfully", result });
  });
};

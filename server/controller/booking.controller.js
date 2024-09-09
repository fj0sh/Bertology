const bookingModel = require("../model/booking.model");

exports.bookService = (req, res) => {
  bookingModel.bookService(req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(result);
  });
};

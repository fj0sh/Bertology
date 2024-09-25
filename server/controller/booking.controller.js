const bookingModel = require("../model/booking.model");

exports.bookService = (req, res) => {
  bookingModel.bookService(req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    }

    console.log(req.body);

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).send({ error: "Please fill out all fields" });
    }

    res.status(200).send(result);
  });
};

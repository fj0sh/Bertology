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

exports.getBookedServices = (req, res) => {
  bookingModel.getBookedServices((err, result) => {
    if (err) {
      return res.status(400).send(err);
    }

    const formattedResult = result.map((results) => ({
      data: {
        id: results.id,
        firstName: results.firstName,
        lastName: results.lastName,
        location: results.location,
        email: results.email,
        contactNumber: results.contactNumber,
        facebookAccount: results.facebookAccount,
        municipality: results.municipality,
        barangay: results.barangay,
        landmark: results.landmark,
        carModel: results.carModel,
        additionalDetails: results.additionalDetails,
        proofOfPayment: results.proofOfPayment,
        bookedDate: results.bookedDate,
        paymentType: results.payment_type,
        mode: results.mode,
        status: results.status,
        service: {
          id: results.serviceId,
          serviceName: results.serviceName,
          servicePrice: results.servicePrice,
          serviceDuration: results.serviceDuration,
        },
        // test: results,
      },
    }));
    return res.status(200).send(formattedResult);
  });
};

exports.selectServiceType = (req, res) => {
  bookingModel.selectServiceTypes(req.body, (err, results) => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.status(200).send(results);
  });
};

exports.getSelectedTypes = (req, res) => {
  bookingModel.getSelectedType(req.params.id, (err, results) => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.status(200).send(results);
  });
};

exports.getBookedServiceId = (req, res) => {
  bookingModel.getBookedServicesById(req.params.id, (err, results) => {
    if (err) {
      return res.status(400).send(err);
    }
    console.log(results);
    return res.status(200).send(results);
  });
};

exports.acceptBooking = (req, res) => {
  bookingModel.confirmBooking(req.params.id, (err, results) => {
    if (err) {
      return res.status(400).send(err);
    }
    console.log(results);
    return res.status(200).send(results);
  });
};

exports.declineBooking = (req, res) => {
  bookingModel.declineBooking(req.params.id, (err, results) => {
    if (err) {
      return res.status(400).send(err);
    }
    console.log(results);
    return res.status(200).send(results);
  });
};

exports.deleteBooking = (req, res) => {
  bookingModel.deleteBooking(req.params.id, (err, results) => {
    if (err) {
      return res.status(400).send(err);
    }
    console.log(results);
    return res.status(200).send(results);
  });
};

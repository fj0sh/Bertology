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
        street: results.street,
        service: {
          id: results.serviceId,
          serviceName: results.serviceName,
          servicePrice: results.servicePrice,
          serviceDuration: results.serviceDuration,
        },
        installer: {
          id: results.installerId,
          firstName: results.installerFirstName,
          lastName: results.installerLastName,
          address: results.installerAddress,
          phoneNumber: results.installerPhoneNumber,
          email: results.installerEmail,
          image: results.installerImage,
        },
        // test: results,
      },
    }));
    return res.status(200).send(formattedResult);
  });
};

exports.getBookedServiceByStatus = (req, res) => {
  bookingModel.getBookingByStatus(req.body.status, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
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

exports.setBookingAsDone = (req, res) => {
  bookingModel.setBookingAsDone(req.params.id, (err, results) => {
    if (err) {
      return res.status(400).send(err);
    }
    console.log(results);
    return res.status(200).send(results);
  });
};

exports.getStatusCount = (req, res) => {
  bookingModel.getStatusCount((err, results) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(results);
  });
};

exports.getMonthlySales = (req, res) => {
  bookingModel.getMonthlySales((err, results) => {
    if (err) return res.status(400).send(err);

    return res.status(200).send(results);
  });
};

exports.getBookingsByDate = (req, res) => {
  bookingModel.getBookingByDate(req.body.date, (err, result) => {
    if (err) return res.status(400).send(err);

    return res.status(200).send(result);
  });
};

exports.declineBookingReason = (req, res) => {
  bookingModel.declineReason(req.body, (err, result) => {
    if (err) return res.status(400).send(err);

    return res.status(200).send(result);
  });
};

exports.getDeclineReasonById = (req, res) => {
  bookingModel.getDeclineReasonById(req.params.id, (err, result) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(result);
  });
};

exports.reassignInstaller = (req, res) => {
  bookingModel.reassignInstaller(
    req.body.bookingId,
    req.body.installerId,
    (err, result) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(result);
    }
  );
};

exports.markMissedBooking = (req, res) => {
  bookingModel.markMissedBooking((err, result) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(result);
  });
};

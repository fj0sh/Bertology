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
      res.status(400).send(err);
    }

    const formattedResult = result.map((results) => ({
      data: {
        id: results.id,
        location: results.location,
        fbAccount: results.fbAccount,
        contact: results.contact,
        serviceRequest: results.serviceRequest,
        carModel: results.carModel,
        detail: results.detail,
        dateBooked: results.dateBooked,
        paymentType: results.payment_type,
        paymentProof: results.payment_proof,
        user: {
          id: results.userId,
          firstName: results.firstname,
          lastName: results.lastname,
          username: results.username,
          phoneNumber: results.phoneNumber,
          emailAddress: results.emailAddress,
          dateCreated: results.dateCreated,
        },
        service: {
          id: results.serviceId,
          serviceName: results.serviceName,
          servicePrice: results.servicePrice,
          serviceDescription: results.serviceDescription,
          serviceDuration: results.serviceDuration,
        },
        // test: results,
      },
    }));
    console.log(formattedResult);
    res.status(200).send(formattedResult);
  });
};

exports.getBookedServiceId = (req, res) => {
  bookingModel.getBookedServicesById(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    }
    console.log(results);
    res.status(200).send(results);
  });
};

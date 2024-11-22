const inquiryController = require("../model/inquiries.model");

exports.getInquiries = (req, res) => {
  inquiryController.getInstallers((err, results) => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.status(200).send(results);
  });
};

exports.addInquiry = (req, res) => {
  inquiryController.addInquiry(req.body, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

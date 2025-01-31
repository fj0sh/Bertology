const installerModel = require("../model/installer.model");

exports.getInstallers = (req, res) => {
  installerModel.getInstallers((err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send("Error: " + err);
    }

    return res.status(200).send(result);
  });
};

exports.addInstaller = (req, res) => {
  installerModel.addInstaller(req.body, (err, result) => {
    console.log(req.body);
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

exports.assignInstaller = (req, res) => {
  installerModel.assignInstaller(
    req.body.installerId,
    req.body.bookingId,
    (err, result) => {
      if (err) {
        return res.status(400).send(err);
      }

      return res.status(200).send(result);
    }
  );
};
exports.assignInstallerV2 = (req, res) => {
  installerModel.assignInstallerV2(
    req.body.installerId,
    req.body.bookingId,
    req.body.bookedData,
    (err, result) => {
      if (err) {
        return res.status(400).send(err);
      }

      return res.status(200).send(result);
    }
  );
};

exports.getInstallerById = (req, res) => {
  installerModel.getInstallerById(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

exports.editInstaller = (req, res) => {
  installerModel.editInstaller(req.params.id, req.body, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

exports.deleteInstaller = (req, res) => {
  installerModel.deleteInstaller(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

exports.getInstallerBookings = (req, res) => {
  installerModel.getInstallerBookings(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
};

const Modify = require("../models/voterModify.model.js");

//Update an object
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Modify.updateBySSN(
    req.params.ssn,
    new Modify(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found voter with ssn ${req.params.ssn}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating voter with ssn " + req.params.ssn
          });
        }
      } else res.send(data);
    }
  );
};

//Delete an object
exports.delete = (req, res) => {
  Modify.remove(req.params.ssn, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found voter with ssn ${req.params.ssn}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete voter with ssn " + req.params.ssn
        });
      }
    } else res.send({ message: `Voter was Deleted Successfully!` });
  });
};

//Delete all objects
exports.deleteAll = (req, res) => {
  Modify.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all voters."
      });
    else res.send({ message: `All Voters were Deleted Successfully!` });
  });
};

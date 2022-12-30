const Stats = require("../models/voterStats.model.js");

// Retrieve all voter stats from the database
exports.findAll = (req, res) => {
  
};
// Find a single voter detail with ssn
exports.findOne = (req, res) => {
  
};

// Retrieve all voter stats from the database
exports.findAll = (req, res) => {
  Stats.getAll( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving voter stats."
      });
    else res.send(data);
  });
};

//Retrieve a single object
exports.findOne = (req, res) => {
  Stats.findBySSN(req.params.ssn, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found exchange with ssn ${req.params.ssn}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving voter stats with ssn test" + req.params.ssn
        });
      }
    } else res.send(data);
  });
};


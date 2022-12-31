module.exports = app => {
  const vmodify = require("../controllers/voterModify.controller.js");
  var router = require("express").Router();
  // Update a voter with ssn
  router.put("/vmodifyBySSN/:ssn", vmodify.update);
  // Delete a voter with ssn
  router.delete("/vdeleteBySSN/:ssn", vmodify.delete);
  // Delete all voters
  router.delete("/vdeleteAll", vmodify.deleteAll);
  app.use('/api/vmodify', router);
  
};
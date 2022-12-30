module.exports = app => {
  const vstats = require("../controllers/voterStats.controller.js");
  var router = require("express").Router();
  // Retrieve all voter stats
  router.get("/", vstats.findAll);
  // Retrieve a single voter stats with ssn
  router.get("/:ssn", vstats.findOne);
  app.use('/api/vstats', router);
  // Retrieve voter stats by age range
  //router.get("/:id", vstats.findOne);
  //app.use('/api/vstats', router); 
  // Retrieve voter stats by city
  //router.get("/:city", vstats.findOne);
  //app.use('/api/vstats', router); 
  
};
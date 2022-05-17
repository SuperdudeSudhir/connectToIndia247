var express = require("express");
var router = express.Router();
const Jobs = require("../models/jobs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "connectToIndia247" });
});

// route for apply form that will carry the data from list of jobs
router.get("/apply", function (req, res, next) {
  res.render("apply", { title: "connect2India247" });
});

// route for jobs lists from the database
router.get("/jobs", async function (req, res, next) {
  var data = await Jobs.find().limit(10);
  console.log("from data:", data);
  res.render("jobs", { title: "connect2India247", data: data });
});

// route for adding a specific job
router.post("/add/job", async function (req, res, next) {
  console.log(req.body, "inserting a document");
  var job = new Jobs({ ...req.body });
  job.save((err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });

  res.render("jobs", { title: "connect2India247" });
});
// route for adding a specific job
router.get("/add/job", function (req, res, next) {
  res.render("admin/addJobs", { title: "connect2India247" });
});

// for seeing the existing job
router.get("/list/job", async function (req, res, next) {
  var data = await Jobs.find().limit(10);
  console.log("from data:", data);
  res.render("admin/listJobs", { title: "connect2India247", data: data });
});

//for deleting a specific job

// route for seeing a specific job
module.exports = router;

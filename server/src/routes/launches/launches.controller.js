const { addNewLaunch, getAllLaunches } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.json(getAllLaunches);
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  console.log(launch);
  addNewLaunch(launch);
  return res.status(201).json(launch)
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch
};

const { addNewLaunch, getAllLaunches } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.json(getAllLaunches());
}
function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing require launch property",
    });
  }

  if(   !launch.target){ return res.status(400).json({
    error: "bbz",
  });}

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }
  console.log(launch);
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};

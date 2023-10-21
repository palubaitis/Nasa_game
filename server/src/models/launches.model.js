const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler X",
  rocket: "X1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(latestFlightNumber, Object.assign(launch, {
    success:true,
    flightNumber:latestFlightNumber,
    upcoming:true,
    customers:["Zero to Mastery", "NASA"]
  }) );
}

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
  addNewLaunch
};

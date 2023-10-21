const launches = new Map();

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

module.exports = {
  launches,
};

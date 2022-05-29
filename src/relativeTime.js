const { NO_DATE } = require("./Errors");

// Input
// Some date string or number(timestamp),
// (optional) years, months, days, hours, minutes, seconds

// Output
// A string of the desired interval of time since given date.

// Edge
// new Date() ex: Sun May 29 2022 14:23:54 GMT-0600 (Mountain Daylight Time)
// Date.now() ex: 1653855887230

// Constraints

const relativeTime = (date, string) => {
  return date ? date : NO_DATE;
};

module.exports = relativeTime;

// Date.parse() --> timestamp
// new Date( timestamp ) ---> dateString
// dateString.toLocaleString ---->  20/12/2012, 03:00:00

const { NO_DATE } = require("./Errors");
const { getDateInts, getTimeInts } = require("./Helpers");
//  -- Input --
//  Some date string or number(timestamp),
//  (optional) years, months, days, hours, minutes, seconds
//  (optional) locale region key
//  -- Output --
//  A string of the desired interval of time since given date.
//  -- Edge --
//  new Date() ex: Sun May 29 2022 14:23:54 GMT-0600 (Mountain Daylight Time)
//  Date.now() ex: 1653855887230
//  -- Constraints --

const relativeTime = (date, string) => {
  const currentDTS = new Date().toLocaleString();
  if (!date) {
    return NO_DATE;
  }
  if (typeof date === "number") {
    date = new Date(date);
  }
  const timeString = date.toLocaleString();

  const currentObj = {
    year: getDateInts(currentDTS)[2],
    month: getDateInts(currentDTS)[1],
    day: getDateInts(currentDTS)[0],
    hour: getTimeInts(currentDTS)[0],
    minute: getTimeInts(currentDTS)[1],
    second: getTimeInts(currentDTS)[2],
  };
  const inputObj = {
    year: getDateInts(timeString)[2],
    month: getDateInts(timeString)[1],
    day: getDateInts(timeString)[0],
    hour: getTimeInts(timeString)[0],
    minute: getTimeInts(timeString)[1],
    second: getTimeInts(timeString)[2],
  };
  console.log(currentObj, inputObj);
  return timeString;
};

module.exports = relativeTime;

// Date.parse() --> timestamp
// new Date( timestamp ) ---> dateString
// dateString.toLocaleString ---->  20/12/2012, 03:00:00

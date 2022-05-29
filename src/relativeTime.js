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
    year: Number(getDateInts(currentDTS)[2]),
    month: Number(getDateInts(currentDTS)[1]),
    day: Number(getDateInts(currentDTS)[0]),
    hour: Number(getTimeInts(currentDTS)[0]),
    minute: Number(getTimeInts(currentDTS)[1]),
    second: Number(getTimeInts(currentDTS)[2]),
  };
  const inputObj = {
    year: Number(getDateInts(timeString)[2]),
    month: Number(getDateInts(timeString)[1]),
    day: Number(getDateInts(timeString)[0]),
    hour: Number(getTimeInts(timeString)[0]),
    minute: Number(getTimeInts(timeString)[1]),
    second: Number(getTimeInts(timeString)[2]),
  };
  const differenceObj = {
    years: Math.abs(currentObj.year - inputObj.year),
    months: Math.abs(currentObj.month - inputObj.month),
    days: Math.abs(currentObj.day - inputObj.day),
    hours: Math.abs(currentObj.hour - inputObj.hour),
    minutes: Math.abs(currentObj.minute - inputObj.minute),
    seconds: Math.abs(currentObj.second - inputObj.second),
  };
  const totalMonths = differenceObj.years * 12 + differenceObj.months;
  const totalDays = totalMonths * 30 + differenceObj.days;
  const totalHours = totalDays * 24 + differenceObj.hours;
  const totalMinutes = totalHours * 60 + differenceObj.minutes;
  const totalSeconds = totalMinutes * 60 + differenceObj.seconds;

  return `${differenceObj.years} years, ${differenceObj.months} months, ${differenceObj.days} days, ${differenceObj.hours} hours, ${differenceObj.minutes} minutes, and ${differenceObj.seconds} seconds`;
};

module.exports = relativeTime;

// Date.parse() --> timestamp
// new Date( timestamp ) ---> dateString
// dateString.toLocaleString ---->  20/12/2012, 03:00:00

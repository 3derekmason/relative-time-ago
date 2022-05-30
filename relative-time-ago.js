// convert milliseconds to desired time intervals

const milliYears = (n) => {
  return Math.floor(n * 0.000000000031689);
};
const milliMonths = (n) => {
  return Math.floor(n * 0.00000000038026);
};
const milliDays = (n) => {
  return Math.floor(n * 0.000000011574);
};
const milliHours = (n) => {
  return Math.floor(n * 0.00000027778);
};
const milliMinutes = (n) => {
  return Math.floor(n * 0.0000166667);
};
const milliSecs = (n) => {
  return Math.floor(n * 0.001);
};

const relativeTimeAgo = (date, key) => {
  if (!date) {
    return new Error("Doesnt work without a date to reference!");
  }
  const currentTimestamp = Date.parse(new Date());
  
  // convert date to unix epoch
  if (typeof date !== "number") {
    date = Date.parse(date);
  }
  // grab total milliseconds between dates
  const difference = currentTimestamp - date;
  
  // display something different if the difference is less than 0
  const lessThanMessage = `Less than one ${key} ago`;

  // return message depening on provided key
  if (key === "year") {
    return milliYears(difference) < 1
      ? lessThanMessage
      : `${milliYears(difference)} years ago`;
  }
  if (key === "month") {
    return milliMonths(difference) < 1
      ? lessThanMessage
      : `${milliMonths(difference)} months ago`;
  }
  if (key === "day") {
    return milliDays(difference) < 1
      ? lessThanMessage
      : `${milliDays(difference)} days ago`;
  }
  if (key === "hour") {
    return milliHours(difference) < 1
      ? lessThanMessage
      : `${milliHours(difference)} hours ago`;
  }
  if (key === "minute") {
    return milliMinutes(difference) < 1
      ? lessThanMessage
      : `${milliMinutes(difference)} minutes ago`;
  }
  if (key === "second") {
    return milliSecs(difference) < 1
      ? lessThanMessage
      : `${milliSecs(difference)} seconds ago`;
  }
  // if no key is provided as an argument, return difference in milliseconds
  return `${difference} milliseconds ago`;
};

export default relativeTimeAgo;

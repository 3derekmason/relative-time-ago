// convert milliseconds to desired time intervals

const millisecondsInAYear = (n) => {
  return Math.floor(n * 0.000000000031689);
};
const millisecondsInAMonth = (n) => {
  return Math.floor(n * 0.00000000038026);
};
const millisecondsInADay = (n) => {
  return Math.floor(n * 0.000000011574);
};
const millisecondsInAnHour = (n) => {
  return Math.floor(n * 0.00000027778);
};
const millisecondsInAMinute = (n) => {
  return Math.floor(n * 0.0000166667);
};
const millisecondsInASecond = (n) => {
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
    return millisecondsInAYear(difference) < 1
      ? lessThanMessage
      : `${millisecondsInAYear(difference)} years ago`;
  }
  if (key === "month") {
    return millisecondsInAMonth(difference) < 1
      ? lessThanMessage
      : `${millisecondsInAMonth(difference)} months ago`;
  }
  if (key === "day") {
    return millisecondsInADay(difference) < 1
      ? lessThanMessage
      : `${millisecondsInADay(difference)} days ago`;
  }
  if (key === "hour") {
    return millisecondsInAnHour(difference) < 1
      ? lessThanMessage
      : `${millisecondsInAnHour(difference)} hours ago`;
  }
  if (key === "minute") {
    return millisecondsInAMinute(difference) < 1
      ? lessThanMessage
      : `${millisecondsInAMinute(difference)} minutes ago`;
  }
  if (key === "second") {
    return millisecondsInASecond(difference) < 1
      ? lessThanMessage
      : `${millisecondsInASecond(difference)} seconds ago`;
  }
  // if no key is provided as an argument, return difference in milliseconds
  return `${difference} milliseconds ago`;
};

export default relativeTimeAgo;

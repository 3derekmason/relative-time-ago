// convert milliseconds to desired time intervals

const millisecondsForYear = (n) => {
  return Math.floor(n * 0.000000000031689);
};
const millisecondsForMonth = (n) => {
  return Math.floor(n * 0.00000000038026);
};
const millisecondsForDay = (n) => {
  return Math.floor(n * 0.000000011574);
};
const millisecondsForHour = (n) => {
  return Math.floor(n * 0.00000027778);
};
const millisecondsForMinute = (n) => {
  return Math.floor(n * 0.0000166667);
};
const millisecondsForSecond = (n) => {
  return Math.floor(n * 0.001);
};

const relativeTimeAgo = (date, key) => {
  if (!date) {
    return new Error("Invalid date! Must be a date object or unix timestamp.");
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
    return millisecondsForYear(difference) < 1
      ? lessThanMessage
      : millisecondsForYear(difference) === 1
      ? `${millisecondsForYear(difference)} year ago`
      : `${millisecondsForYear(difference)} years ago`;
  }
  if (key === "month") {
    return millisecondsForMonth(difference) < 1
      ? lessThanMessage
      : millisecondsForMonth(difference) === 1
      ? `${millisecondsForMonth(difference)} month ago`
      : `${millisecondsForMonth(difference)} months ago`;
  }
  if (key === "day") {
    return millisecondsForDay(difference) < 1
      ? lessThanMessage
      : millisecondsForDay(difference) === 1
      ? `${millisecondsForDay(difference)} day ago`
      : `${millisecondsForDay(difference)} days ago`;
  }
  if (key === "hour") {
    return millisecondsForHour(difference) < 1
      ? lessThanMessage
      : millisecondsForHour(difference) === 1
      ? `${millisecondsForHour(difference)} hour ago`
      : `${millisecondsForHour(difference)} hours ago`;
  }
  if (key === "minute") {
    return millisecondsForMinute(difference) < 1
      ? lessThanMessage
      : millisecondsForMinute(difference) === 1
      ? `${millisecondsForMinute(difference)} minute ago`
      : `${millisecondsForMinute(difference)} minutes ago`;
  }
  if (key === "second") {
    return millisecondsForSecond(difference) < 1
      ? lessThanMessage
      : millisecondsForSecond(difference) === 1
      ? `${millisecondsForSecond(difference)} second ago`
      : `${millisecondsForSecond(difference)} seconds ago`;
  }
  // if no key is provided as an argument, return difference in milliseconds
  return `${difference} ms ago`;
};

export default relativeTimeAgo;

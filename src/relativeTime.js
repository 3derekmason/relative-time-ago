const { NO_DATE } = require("./Errors");

const relativeTime = (date, string) => {
  return date ? date : NO_DATE;
};

module.exports = relativeTime;

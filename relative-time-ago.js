const milliYears = (n) => {
  return Math.floor(n * 0.000000000031689);
};
const milliMonths = (n) => {
  returnMath.floor(n * 0.00000000038026);
};
const milliDays = (n) => {
  returnMath.floor(n * 0.000000011574);
};
const milliHours = (n) => {
  returnMath.floor(n * 0.00000027778);
};
const milliMinutes = (n) => {
  returnMath.floor(n * 0.0000166667);
};
const milliSecs = (n) => {
  return Math.floor(n * 0.001);
};


const relativeTimeAgo = (date, str) => {
    const currentTimestamp = Date.parse(new Date());
    if (typeof date !== "number") {
      date = Date.parse(date);
    }
    const difference = currentTimestamp - date;

    return `Here you go! ${difference}`;
  },

  export default relativeTimeAgo;

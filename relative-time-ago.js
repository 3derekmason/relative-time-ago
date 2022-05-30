module.exports = {
  relativeTimeAgo: (date, str) => {
    const lessThanMessage = `less than a ${str} ago`;
    const currentTimestamp = Date.parse(new Date());
    if (typeof date !== "number") {
      date = Date.parse(date);
    }
    const difference = currentTimestamp - date;
    return str === "year"
      ? Math.floor(difference * 0.000000000031689) < 1
        ? lessThanMessage
        : Math.floor(difference * 0.000000000031689)
      : str === "month"
      ? Math.floor(difference * 0.00000000038026) < 1
        ? lessThanMessage
        : Math.floor(difference * 0.00000000038026)
      : str === "day"
      ? Math.floor(difference * 0.000000011574) < 1
        ? lessThanMessage
        : Math.floor(difference * 0.000000011574)
      : str === "hour"
      ? Math.floor(difference * 0.00000027778) < 1
        ? lessThanMessage
        : Math.floor(difference * 0.00000027778)
      : str === "minute"
      ? Math.floor(difference * 0.0000166667) < 1
        ? lessThanMessage
        : Math.floor(difference * 0.0000166667)
      : str === "second"
      ? Math.floor(difference * 0.001) < 1
        ? lessThanMessage
        : Math.floor(difference * 0.001)
      : `${Math.floor(difference * 0.000000000031689)} years, ${Math.floor(
          difference * 0.00000000038026
        )} months, ${Math.floor(
          difference * 0.000000011574
        )} days, ${Math.floor(difference * 0.00000027778)} hours, ${Math.floor(
          difference * 0.0000166667
        )} minutes, and ${Math.floor(difference * 0.001)} seconds ago...`;
  },
};

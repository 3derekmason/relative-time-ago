module.exports = {
  getDateInts: (localeString) => {
    const splitDate = localeString.split("");
    const resultDate = splitDate.splice(0, 9);
    return resultDate.join("").split("/");
  },
  getTimeInts: (localeString) => {
    const splitTime = localeString.split("");
    const resultTime = splitTime.slice(11);
    if (localeString.includes("PM")) {
      resultTime[0] = (Number(resultTime[0]) + 12).toString();
    }
    return resultTime.slice(0, 7).join("").split(":");
  },
};

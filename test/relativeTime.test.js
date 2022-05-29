const relativeTime = require("../src/relativeTime");
const { NO_DATE } = require("../src/Errors");

test("Returns error if not given a date", () => {
  expect(relativeTime()).toBe(NO_DATE);
});

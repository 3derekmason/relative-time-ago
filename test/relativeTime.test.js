const relativeTime = require("../src/relativeTime");
const { NO_DATE } = require("../src/Errors");

test("Returns error if not given a date", () => {
  expect(relativeTime()).toBe(NO_DATE);
});
test("Parses date input correctly", () => {
  let input = new Date();
  let parsed = Date.parse(input);

  expect(typeof relativeTime(parsed)).not.toBe("number");
  expect(typeof relativeTime(input)).not.toBe("number");
});

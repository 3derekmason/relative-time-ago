const relativeTime = require("../src/relativeTime");
const { NO_DATE } = require("../src/Errors");

const input = new Date();
const parsed = Date.parse(input);

test("Returns error if not given a date", () => {
  expect(relativeTime()).toBe(NO_DATE);
});
test("Parses date input correctly", () => {
  expect(typeof relativeTime(parsed)).not.toBe("number");
  expect(typeof relativeTime(input)).not.toBe("number");
});
test("Returns a string", () => {
  expect(typeof relativeTime(input)).toBe("string");
  expect(typeof relativeTime(parsed)).toBe("string");
});

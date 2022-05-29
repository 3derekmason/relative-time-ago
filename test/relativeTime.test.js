const relativeTime = require("../src/relativeTime");

test("Returns date", () => {
  const result = new Date();
  expect(relativeTime(result)).toBe(result);
});

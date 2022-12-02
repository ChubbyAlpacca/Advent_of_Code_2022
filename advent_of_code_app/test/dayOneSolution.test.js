import underTest from "./src/day1/dayOneSolution.js";

textSync("should return highest numer - ", () => {
  expect(
    underTest("advent_of_code_app/test/testResources/dayOneInput.txt")
  ).toBe(0);
});

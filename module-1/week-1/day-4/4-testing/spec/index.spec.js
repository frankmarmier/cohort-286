const { filterWithLetter } = require("../src/index.js");

describe("Function filterWithLetter", () => {
  it("Should be a function", () => {
    expect(typeof filterWithLetter).toEqual("function");
  });
  it("Should return null if no elements in the array were matched", () => {
    expect(filterWithLetter(["x", "y", "z"], "p")).toEqual(null);
    expect(filterWithLetter(["x", "y", "z"], "p")).toEqual(null);
    expect(filterWithLetter(["x", "y", "z"], "p")).toEqual(null);
  });
});

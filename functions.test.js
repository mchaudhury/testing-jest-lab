const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide,
  numbersArray,
} = require("./functions");

test("Should return two", () => {
  expect(returnTwo()).toBe(2);
});
describe("Greeting Function", () => {
  test("Should return Hello, James", () => {
    expect(greeting("James")).toBe("Hello, James");
  });
  test("Should return Hello, Jill", () => {
    expect(greeting("Jill")).toBe("Hello, Jill");
  });
});

describe("Math Functions", () => {
  test("Should return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("Should return 14", () => {
    expect(add(5, 9)).toBe(14);
  });
  test("Should return true", () => {
    expect(typeof add(1, 2)).toBe("number");
  });
  test("Should return 5", () => {
    expect(subtract(10, 5)).toBe(5);
  });
  test("Should return true", () => {
    expect(typeof subtract(5, 15)).toBe("number");
  });
  test("Should return 600", () => {
    expect(multiply(6, 100)).toBe(600);
  });
  test("Should return true", () => {
    expect(typeof multiply(12, 6)).toBe("number");
  });
  test("Should return 5", () => {
    expect(divide(500, 100)).toBe(5);
  });
  test("Should return true", () => {
    expect(typeof divide(30, 10)).toBe("number");
  });
});

describe("Array Function testing for numbersArray", () => {
  test("Should contain 4", () => {
    expect(numbersArray).toContain(4);
  });
});

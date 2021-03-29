import { greet } from ".";
greet

describe("This should be greeting someone or people", () => { 
  test("This should be greeting francis", () => {
    expect(greet("Francis")).toEqual("Hello FRANCIS!");
  });

  test("This should be greeting World", () => {
    expect(greet()).toEqual("Hello WORLD!");
  });
})




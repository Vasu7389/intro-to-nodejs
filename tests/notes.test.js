const add = (a, b) => a + b;

test("add takes two numbers and returns a sum", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

//we can add test cases for the notes here

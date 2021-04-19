export function sumTwoSmallestNumbers(numbers: number[]): number {
  const order = numbers.sort(function (a, b) {
    return a - b;
  });
  let result = 0;
  for (let i = 0; i < order.length; i++) {
    if (i === 0) {
      result += order[0];
    }
    if (i === 1) {
      result += order[1];
    }
    if (numbers.length < 4) {
      throw "There are less than 4 numbers!";
    }
    if (numbers[i] < 0) {
      throw "There are non-positive numbers!";
    }
  }
  return result;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

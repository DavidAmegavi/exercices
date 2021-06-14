import { squareNumber } from "./squareNumber";

export function context(arrayOfNumbers: number[]): number[] {
  // Code the function here
  const mySquareTab = arrayOfNumbers.map((value) => {
    return squareNumber(value);
  });
  return mySquareTab;
}

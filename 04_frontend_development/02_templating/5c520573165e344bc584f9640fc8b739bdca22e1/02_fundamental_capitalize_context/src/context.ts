import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  const result = sentence.split(" ");
  const mySentence = result.map((word) => {
    return capitalize(word);
  });
  return mySentence.join(" ");
}

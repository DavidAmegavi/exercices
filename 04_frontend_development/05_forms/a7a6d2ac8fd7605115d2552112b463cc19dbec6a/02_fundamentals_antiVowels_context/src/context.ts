import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (input: string): string => {
  // Code your function for context here
  // const voyelles = ["a", "e", "i", "o", "u"];
  const words = sentenceSplitter(input);
  const result = words.filter((word) => {
    if (
      word.startsWith("a") ||
      word.startsWith("e") ||
      word.startsWith("i") ||
      word.startsWith("o") ||
      word.startsWith("u") ||
      word.startsWith("y") ||
      word.startsWith("A") ||
      word.startsWith("E") ||
      word.startsWith("I") ||
      word.startsWith("O") ||
      word.startsWith("U") ||
      word.startsWith("Y")
    ) {
      return false;
    } else {
      return true;
    }
  });
  return sentenceJoiner(result);
};

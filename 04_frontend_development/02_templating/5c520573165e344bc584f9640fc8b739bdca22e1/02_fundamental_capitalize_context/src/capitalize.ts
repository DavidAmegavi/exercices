// Copy your function `capitalize` from the first exercise

export function capitalize(word: string): string {
  // Code your function here
  const letters = word.charAt(0).toUpperCase() + word.slice(1);
  return letters;
}

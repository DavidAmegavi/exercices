export function mumble(letters: string): string {
  const mumbleLetters = letters.split("");
  const result = mumbleLetters.map((letter, index) => {
    return letter.repeat(index + 1).toLowerCase();
  });

  return result.join("-");
}

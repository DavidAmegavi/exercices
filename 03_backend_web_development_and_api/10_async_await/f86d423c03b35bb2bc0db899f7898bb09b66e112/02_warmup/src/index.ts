function lettersCounter(word: string): unknown {
  let michou = {};
  const letters = word.split("");
  letters.sort();
  // letters.forEach((letter) => {
  // let countLetter = letters.filter(currentLetter => { currentLetter === letter
  //     let result = countLetter
  //     console.log(result);
  // })
  // })
  for (let i = 0; i < letters.length; i++) {
    const countLetter = letters.filter((currentLetter) => {
      return currentLetter === letters[i];
    });
    return (michou = {
      letters: countLetter,
      countLetter: countLetter.length,
    });
  }
  console.log(michou);
}
console.log(lettersCounter("tata"));

function numberGame(reader, min = 1, max = 100) {
  let nbComputer = Math.round(Math.random() * (max - min) + min);
  console.log(nbComputer);

  function game(plop) {
    const nb = parseInt(plop);

    if (!Number.isInteger(nb)) {
      reader.question("This was not a number ", game);
      console.log("Enter a number ");
    } else if (nb < min || nb > max) {
      reader.question("The number is between 1 and 100", game);
      console.log("Enter a number ");
    } else if (nb < nbComputer) {
      reader.question("Too low ", game);
      console.log("Enter a number ");
    } else if (nb > nbComputer) {
      reader.question("Too high", game);
      console.log("Enter a number ");
    } else if (nb === nbComputer) console.log("You won!");
    reader.close();
  }
  reader.question("Enter a number ", game);
}
module.exports = numberGame;

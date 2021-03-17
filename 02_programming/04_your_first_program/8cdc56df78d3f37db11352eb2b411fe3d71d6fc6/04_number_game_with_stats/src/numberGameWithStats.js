function numberGameWithStats(reader, min = 1, max = 100) {
  let nbComputer = Math.round(Math.random() * (max - min) + min);
  console.log(nbComputer);

  console.log("Welcome!\nYou have to find the right number, between 1 and 100!\nGood luck!!");
  reader.question("Enter a number", game);
  function numberOfTries (count){
    if(enter )
  }

  function game(enter) {
    const nb = parseInt(enter);
    if (Number.isInteger(nb)){
      if(nb < min || nb > max ){
        console.log("The number is between 1 and 100");
        reader.question("Enter a number", game);
      }
      else if (nb < nbComputer){
        console.log("Too low");
        reader.question("Enter a number", game);
      }
      else if (nb > nbComputer){
        console.log("Too high");
        reader.question("Enter a number", game);
      }
      else if (nb === nbComputer || numberOfTries === 7){
        console.log("You won!");
        reader.close();
      }
    }
    else {
      console.log("This was not a number ");
      reader.question("Enter a number", game);
    }
  }
}

module.exports = numberGameWithStats;

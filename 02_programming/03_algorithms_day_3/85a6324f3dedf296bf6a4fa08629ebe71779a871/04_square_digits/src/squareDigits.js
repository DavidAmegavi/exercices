function squareDigits(integer) {
  
  return parseInt(integer.toString().split("").map(number => String(parseInt(number) * parseInt(number))).join(" "));
 
}

// Leave the line below for tests to work
module.exports = squareDigits;
 

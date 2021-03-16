function squareDigits(integer) {
   
  
  if ( Number.isInteger(integer = true )){
    let result = integer * integer ;
    return result;  
  }
  else if (Number.isInteger(integer = false )) {
    let resultError = new error ("This is not an number !");
    throw resultError;
 
  }
}

// Leave the line below for tests to work
module.exports = squareDigits;
console.log(squareDigits(6.9)); 

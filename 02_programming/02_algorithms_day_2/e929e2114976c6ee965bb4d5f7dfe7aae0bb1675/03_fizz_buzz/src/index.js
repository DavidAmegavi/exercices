function fizzBuzz(number1, number2, func) {
  // Code the function here.
  const list=[];

  if (number1 < number2) { 
    let n = number1

    while (n <= number2) {
      n++;
      list.push(n);

    }
  }
  if (n % 3 === 0 ){
    console.log("fizz")
  }
  return list;
  
}

// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
console.log(fizzBuzz(0, 14)); 
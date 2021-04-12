function range(number1, number2) {
  // Code the function here.
  const myTab =[];
  
  //   if (number1 < number2) {
  //     //je veux que le number1 aille jusquau number2
  //     let n = 0;

  //     while (n < number2) {
  //       n++;
  //       myTab.push(n);
  //     }
  //   } else if (number1 > number2) {
  //     //je veux que le number2 aille jusquau number1
  //     let n = number1;

  //     while (number2 <= n) {
  //       myTab.push(n);
  //       n--;   
  //     }
  //   } else {
  //     myTab.push(number2);
  //   }
  //   return myTab; 
  // }

  if(number1 < number2) {
    for(let i = 1; i <= number2; i++) {
      myTab.push(i);
    }
  } else if (number1 > number2) {
    for(let i = number1; i >= number2; i--){
      myTab.push(i); 
    }
  }
  return myTab; 
}

// Do not remove last lines, it is for tests
module.exports = range;
 
console.log(range(4, 1));
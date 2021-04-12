function calculator(reader) {
  console.log("Welcome to your calculator!");
  const askFirstNumber = () => {
    reader.question("Enter your first number: \n", (value1) => {
      if (checkNumber(value1) !== value1) {
        console.log("Not a number");
        askFirstNumber();
      } else {
        const askOperationType = () => { 
          reader.question("Enter the operation [+ * / -]: \n", (operation) => {
            if (checkOperation(operation) !== operation) {
              console.log("Not a oparator signs");
            } else { 
              askOperationType();    
            const askSecondNumber = () => {
              reader.question("Enter your second number: \n", (value2) => {
                if (checkNumber(value2) !== value2) {
                  console.log("Not a number");
                  askSecondNumber();
                } else {
                  function calcul() {
                    if (operation === "+") {
                      let result = parseInt(value1) + parseInt(value2);
                      console.log(result);
                    } else if (operation === "*") {
                      let result = parseInt(value1) * parseInt(value2);
                      console.log(result);
                    } else if (operation === "/") {
                      let result = parseInt(value1) / parseInt(value2);
                      console.log(result);
                    } else if (operation === "-") {
                      let result = parseInt(value1) - parseInt(value2);
                      console.log(result);
                    }
                    reader.close();
                  }
                  calcul();
                }
              });
            };
            askSecondNumber();
          });
        };
        askOperationType();
      }
    });
  };
  askFirstNumber();
}
// function checkNumber(value) {
//   if (isNaN(value)) {
//     return null;
//   } else {
//     return value;
//   }
// }

// function checkNumber(operation) {
//   if (operation !== "+" || "-" || "*" || "/") {  
//     return null
//   } else {
//     return operation; 
//   }
// })






function calculator(reader) {

  function doSomethingWithnumber(number1){
    if(isNaN(number1)){
      console.log("Not a number");
       askFirstNumber();  
    } else {
      askOperationType(); 
    }
    
  }

  const askFirstNumber = () => {
    reader.question("Enter the first number \n>  ", (number1) => { 
      doSomethingWithnumber(number1);
      const askOperationType = () => {
        reader.question("Choose an operation: [ + - * / ]\n> " , (operation) => {
          
          const askSecondNumber = () => {
            reader.question("Enter the second number\n> ", (number2) => {

            });
          };
        });
      };
    });
  };

}

export default calculator;




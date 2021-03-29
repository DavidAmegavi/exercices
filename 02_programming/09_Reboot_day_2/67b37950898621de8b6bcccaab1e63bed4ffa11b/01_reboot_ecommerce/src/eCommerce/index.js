const readline = require("readline");
const eCommerce = require("./eCommerce");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

eCommerce(reader);
function ShopLaunch (){
  console.log("**********\nMENU\n**********\n1 - Buy a product\n2 - Show cart\n3 - Checkout\n4 - Quit\n");
  reader.question("Choose an action", (choice) => {
    if(choice === "1"){
      console.log("Welcome in 1");
    } else if (choice === "2"){
      console.log("Welcome in 1");
    } else if (choice === "3"){
      console.log("Welcome in 3");
    } else if (choice === "4"){
      reader.close(); 
    }
  })
}
ShopLaunch(); 
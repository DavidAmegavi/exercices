import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Customer {
  constructor(firstname,lastname){
    this.firstname = firstname
    this.lastname = lastname 
  }
}

class CustomerData extends Customer{
  createNewCustomer(){
    reader.question("first name:\n", (firstnameInput) => {
      this.firstname = firstnameInput;
    })
  }
}

function welcome ()
{
  console.log("Welcome\n*************" ); 
  console.log("1 - Add new customer\n2 - Access customer data\n3 - Quit   ")
    reader.question("Choose an action:\n", (choice) => 
  { 
      if(choice === "1")
      {
        CustomerData();
      }
      else if (choice === "2")
      {
        ;
      }
       else if(choice === "3") 
      {
        reader.close(); 
      }
  }); 
}
welcome(); 
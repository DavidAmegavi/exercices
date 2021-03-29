import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1 user start the program 
// 2 program show the menu 
//   program ask the user to choose a category 
//   user choose the first category create customer
//  user input all the information 
// the app wait input of the user 
//  end of create a new customer 
//  back to the menu of the app 
//  program ask the user to choose a category 
//  the user choose the second category customer data 
//  the app show the second menu customer data 
//  the app ask the user to choose a customer 


let customer = [];

  


let customerInfo = 
{
    firstname: null, 
    lastname: null,
    email: null, 
    birthdate: null, 
    city: null, 
    country: null,  
};

function getAcustomer () {
  const first = customer.firstname;
  const last = customer.lastname; 
  const fullname = first + last 
  const title = fullname.toUppercase; 
  console.log( {title} ); 
  
}

const backToMenu = () => {
  console.log("1 - Add new customer\n2 - Access customer data\n3 - Quit   ")
  reader.question("Choose an action:\n", (choice) => 
{ 
    if(choice === "1")
    {
      createNewCustomer();
    }
    else if (choice === "2")
    {
      customerData();
    }
     else if(choice === "3") 
    {
      reader.close(); 
    }
}); 
} 



function customerData (){
  
  customer.push(customerInfo); 
  customer.forEach(element => console.log(element.firstname, element.lastname));
  reader.question("Choose a number\n", (choiceCustomer) => {
    if(choiceCustomer === "1"){
       console.log("heheheh")
    } else if(choiceCustomer === "2") {
      
    } else if(choiceCustomer === "3") {
      
    } else if(choiceCustomer === "4") {
      
    }
  })
}

function createNewCustomer (){
  console.log("CREATE NEW CUSTOMER\n*******************");
  reader.question("first name:\n", (firstnameInput) => {
    customerInfo.firstname = firstnameInput;

    reader.question("last name:\n", (lastnameInput) => {
      customerInfo.lastname = lastnameInput;

      reader.question("email:\n", (emailInput) => {
        customerInfo.email = emailInput; 

        reader.question("birth date\n",(birthdateInput) => {
          customerInfo.birthdate = birthdateInput;

          reader.question("city:\n", (cityInput) => {
            customerInfo.city = cityInput; 

            reader.question("country: \n", (countryInput) => {
              customerInfo.country = countryInput;
              backToMenu();
            });
          });
        });
      });
    });
  }); 
}



function welcome ()
{
  console.log("Welcome\n*************" ); 
  console.log("1 - Add new customer\n2 - Access customer data\n3 - Quit   ")
    reader.question("Choose an action:\n", (choice) => 
  { 
      if(choice === "1")
      {
        createNewCustomer();
      }
      else if (choice === "2")
      {
        customerData();
      }
       else if(choice === "3") 
      {
        reader.close(); 
      }
  }); 
}
welcome(); 







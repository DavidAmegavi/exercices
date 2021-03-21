// There should be no import in this file. Only exports!
let litersOfCoffee = 0;

function putLitersOfCoffee (quantityInCentiliters){
  litersOfCoffee += quantityInCentiliters; 
  return true;  
}

function consumeLitersOfCoffee(quantityInCentiliters) {
  if(litersOfCoffee - quantityInCentiliters >= 0) {
    litersOfCoffee -= quantityInCentiliters;
    return true ; 
  } else {
    return false; 
  }
}

export { putLitersOfCoffee , consumeLitersOfCoffee }; 
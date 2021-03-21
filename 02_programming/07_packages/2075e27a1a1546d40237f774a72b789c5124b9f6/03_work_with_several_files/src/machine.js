// Here you can import functions from 'container' and 'drink'
import * as container from "./container.js"; 
import * as drinks from "./drinks.js"; 

function fillWithLitersOfCoffee (quantityInCentiliters){
  return container.putLitersOfCoffee(quantityInCentiliters); 
}

function expresso (){
  return drinks.expresso(0.08);
}

function longCoffee() {
  return drinks.longCoffee(0.15); 
}

export {fillWithLitersOfCoffee, expresso, longCoffee }; 
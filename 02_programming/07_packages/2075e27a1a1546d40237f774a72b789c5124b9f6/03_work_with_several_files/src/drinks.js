// There should be no import in this file. Only exports!
import * as container from "./container.js";
function expresso (quantityInCentiliters) {
  return container.consumeLitersOfCoffee(quantityInCentiliters);
  
}

function longCoffee (quantityInCentiliters) {
  return container.consumeLitersOfCoffee(quantityInCentiliters);
}



export { longCoffee, expresso }; 



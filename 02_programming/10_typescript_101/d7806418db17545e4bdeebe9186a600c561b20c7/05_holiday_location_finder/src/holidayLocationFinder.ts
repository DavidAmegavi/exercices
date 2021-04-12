import { Interface } from "readline";
import { CONTINENTS, CITIES } from "./data/data"
// pseudo code here
// 1 the users turn on the app 
  // 2 The app waits the user to put a choice of continent 
  // 3 the user input a choice 
  // 4 the app return a sentence 
  // 5 the app return a random city and country in relation to the choice 
  // 6 The app turn off 

  
  
function holidayLocationFinder(reader: Interface): void {
  reader.question("***Welcome to HOLIDAY LOCATION FINDER***\n\nThis program will help you find a location based on the continent you will input\nHere is the list of continent to chose from:\n\n - Europe\n - North America\n - South America\n - Asia\n - Africa\n - Oceania\n\n Please input your Choice:\n>  " , (continentChoice) => {
    if(continentChoice === CONTINENTS[0]){
      const EuropeChoice: string[] = CITIES.Europe;
      const ramdomEuropeCity: string = EuropeChoice[Math.floor(EuropeChoice.length * Math.random())];
      console.log(`\nYou choose ${continentChoice} I think you really should go spend some time in ${ramdomEuropeCity}\n`); 

      } else if (continentChoice === CONTINENTS[1]){
          const NorthChoice: string[] = CITIES.NorthAmerica;
          const ramdomNorthCity: string = NorthChoice[Math.floor(NorthChoice.length * Math.random())];
          console.log(`\nYou choose ${continentChoice} I think you really should go spend some time in ${ramdomNorthCity}\n`);
        
      } else if (continentChoice === CONTINENTS[2]){
          const SouthChoice: string[] = CITIES.SouthAmerica;
          const ramdomSouthCity: string = SouthChoice[Math.floor(SouthChoice.length * Math.random())];
          console.log(`\nYou choose ${continentChoice} I think you really should go spend some time in ${ramdomSouthCity}\n`);
        
      } else if (continentChoice === CONTINENTS[3]){
          const AsiaChoice: string[] = CITIES.Asia;
          const ramdomAsiaCity: string = AsiaChoice[Math.floor(AsiaChoice.length * Math.random())];
          console.log(`\nYou choose ${continentChoice} I think you really should go spend some time in ${ramdomAsiaCity}\n`);
        
      } else if (continentChoice === CONTINENTS[4]){
          const AfricaChoice: string[] = CITIES.Africa;
          const ramdomAfricaCity: string = AfricaChoice[Math.floor(AfricaChoice.length * Math.random())];
          console.log(`\nYou choose ${continentChoice} I think you really should go spend some time in ${ramdomAfricaCity}\n`);
        
      } else if (continentChoice === CONTINENTS[5]){
          const OceaniaChoice: string[] = CITIES.NorthAmerica;
          const ramdomOceaniaCity: string = OceaniaChoice[Math.floor(OceaniaChoice.length * Math.random())];
          console.log(`\nYou choose ${continentChoice} I think you really should go spend some time in ${ramdomOceaniaCity}\n`);
      }   reader.close();
  }); 
   
}



// Leave the line below for tests to work properly.
export { holidayLocationFinder };

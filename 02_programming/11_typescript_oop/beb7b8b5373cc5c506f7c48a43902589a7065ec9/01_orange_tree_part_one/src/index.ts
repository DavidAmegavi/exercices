// Code the class here.

abstract class Tree {
  age: number; 
  height: number; 
  alive: boolean = true; 

  constructor(age: number){
    this.age = age;
    if(age <= 9){
      this.height = age * 25;
    } else if (age >= 10 && age <= 20){
      const rest = (age - 9) * 10;
      this.height = (9 * 25) + rest;
    } else if (age > 20){
     this.height =  (9 * 25) + (11 * 10); 

    }
    
  }

 abstract ageOneYear(): void 


  abstract isAlive(): boolean 


  seed(): void {
    this.age = 0; 
    this.height = 0;
    this.alive = true;  
  
  }


}

class Sport {
  name: string;
  popularity: boolean; 
  place: string;
  team: boolean = true;
  player: number; 
  level : string; 


  constructor(name: string, player: number, place: string) {
    this.name = name;  
    this.player = player; 
    this.place = place;
  }

  money(currency : number = 0): void{
    console.log(`${this.name} is ${this.player}player versus 5 player in ${this.place} with ${currency} euros`); 
  }


class Basketball extends Sport {
  sound(): void {
    console.log("Boom Boom Boom that's baloon "); 
  }
}
const ballin = new Basketball("NBA", 5, "arena")

}





// Leave the line below for tests to work properly.
export { Tree };

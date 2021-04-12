import { Tree } from "./Tree";

// Code your class here.

class OrangeTree extends Tree { 
  oranges:string[] = [];
  constructor(age: number){
    super(age)
  }
  
  ageOneYear(): void{
    this.isAlive(); 
    this.age += 1;
    this.growOranges();
    if(this.age <= 9){
      this.height = this.age * 25;
    } else if (this.age >= 10 && this.age <= 20){
      const rest = (this.age - 9) * 10;
      this.height = (9 * 25) + rest;
    } else if (this.age > 20){
     this.height =  (9 * 25) + (11 * 10); 
    }
  }

  growOranges(): string[]{
    return this.oranges
  }

  isAlive(): boolean {
    if(this.age < 50){
    }
  }




 






// Leave the line below for tests to work properly.
export { OrangeTree };

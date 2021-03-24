
class Bird {
 age: number;


constructor(ageBird:number){
  this.age = ageBird;
}

 sing(): void {
  console.log("Cui cui"); 
}

fly(time: number): void {
  if(this.age <= 1){
    console.log("The bird is too young to fly");
  } else {
    if(this.age > 1 && this.age <= 3){
      console.log(`The bird flew ${time * 1} in ${time} seconds`);
    }else if (this.age > 3){
      console.log(`The bird flew ${time * 2} in ${time} seconds`);
    }
  }
}
}
const myBird = new Bird(2);
console.log(myBird); 

// Leave the line below for tests to work properly.
export { Bird };

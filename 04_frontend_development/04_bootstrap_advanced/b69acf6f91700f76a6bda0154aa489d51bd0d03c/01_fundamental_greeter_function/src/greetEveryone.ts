type ParamRest = string[];

export function greetEveryone(...name: ParamRest): void {
  // Code your function here
  name.forEach((element) => {
    console.log(`Welcome to ${element}`);
  });
}

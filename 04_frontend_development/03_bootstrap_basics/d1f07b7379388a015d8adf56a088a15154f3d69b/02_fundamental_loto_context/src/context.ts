import { lottery_draw } from "./lottery_draw";

type Draw = number[];

export function contextFunction(ticket: Draw): void {
  const flash: Draw = lottery_draw();
  if (JSON.stringify(ticket) === JSON.stringify(flash)) {
    console.log("You won");
  } else {
    console.log("You lost...");
  }
}

// console.log(contextFunction([26, 16, 41, 32, 66, 42]));

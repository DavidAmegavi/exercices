// Copy your function `lottery_draw` from exercise one.

type Draw = number[];

export function lottery_draw(): Draw {
  const result: Draw = [1, 2, 3, 4, 5, 6];
  const newTab = result.map(() => {
    return Math.floor(Math.random() * 100);
  });
  return newTab;
}

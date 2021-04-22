type Draw = [number, number, number, number, number, number];

export function lottery_draw(): Draw {
  const result: Draw = [1, 2, 3, 4, 5, 6];
  const newTab = result.map(() => {
    return Math.floor(Math.random() * 100);
  });
  return newTab;
}

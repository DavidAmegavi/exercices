export function rectangle(width: number, height: number): string {
  let stars: string = ""
  for(let i = 0; i < height; i++){
    for(let j = 0; j < width; j++){
      stars += "*";
    }
    stars += "\n" ;
  }
  return stars;
}


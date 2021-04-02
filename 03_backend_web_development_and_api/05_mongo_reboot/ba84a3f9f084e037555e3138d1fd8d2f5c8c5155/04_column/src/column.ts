export function column(numberOfLines: number, lineContent: string): string {
      
let symbol = "";
  for(let i = 0; i < numberOfLines; i++){
    symbol += lineContent
    symbol += "\n"
  }
      return symbol 
}

// const example = [19, 5, 42, 2, 77]; // 7
// parcourir les élements du tableau
// les mettres dans l'ordres
// si l'élement 1 est plus petit que l'élement 2 return élement 2

export function sumTwoSmallestNumbers(tabNumber: number[]): number {
  function getNotNegativeNumber(number) {
    return number > 0;
  }
  if (tabNumber.every(getNotNegativeNumber) === false) {
    throw Error;
  }

  if (tabNumber.length < 4) {
    throw Error;
  }
  tabNumber.sort((nb1, nb2) => {
    return nb1 - nb2;
  });
  return tabNumber[0] + tabNumber[1];
}
console.log(sumTwoSmallestNumbers([10, 5, 2, 1]));

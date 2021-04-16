// parcourir le tableau nombre par nombre
// checker chaque nombre si il est impair
// passage sur chaque nombre du tableau
// checker le nombre de fois qu'un nombre est present
// stocker
// return le nombre de fois ou il est present dans le tableau

function findOdd(tableau): number {
  let findNumber;
  tableau.forEach((number) => {
    const newTab = tableau.filter((currentNumber) => currentNumber === number);
    console.log(newTab);
    if (newTab.length > 1 && newTab.length % 2 !== 0) {
      findNumber = newTab.length;
    }
  });
  return findNumber;
}
console.log(findOdd([1, 1, 4, 4, 5, 4, 2, 2, 4, 4]));

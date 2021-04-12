import fetch, { Response } from "node-fetch"

function getCategories(): Promise<void> {
  // code the function here
  return fetch("https://api.chucknorris.io/jokes/categories")
  .then((response) => response.json())
  .then((category) => {
    console.log(category);
    })
  .catch((error) => {
    console.error(error);
  });
}

// leave line below for tests to work properly
export { getCategories }

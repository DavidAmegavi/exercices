import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return new Promise((resolve) => {
    const categorieInput = getChuckCategories();
    resolve(categorieInput);
  });
}
function getJoke(category: string): Promise<string> {
  // Your code goes here
  return new Promise((resolve) => {
    resolve(getChuckJoke(category).then((joke) => joke.value));
  });
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
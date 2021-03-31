import fetch, { Response } from "node-fetch"

function getChuckNorrisJoke(): Promise<Response> {
  // code the function here
  return fetch("https://api.chucknorris.io/jokes/random?category={category}")
  .then((value) => value.json())
  .then((value) => {
    console.log (value);
    })
  .catch((error) => {
    console.error(error);
  });
}
}

// leave line below for tests to work properly
export { getChuckNorrisJoke }

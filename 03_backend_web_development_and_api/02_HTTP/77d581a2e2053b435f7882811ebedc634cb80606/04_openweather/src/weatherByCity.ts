import fetch from "node-fetch";


const openWeatherApiKey: string = process.env.OPENWEATHER_API_KEY || "";

function weatherByCity(city: string): Promise<void> {
  // code the function here
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}`)
  .then((response) => response.json())
  .then((city) => {
    console.log(city.)
  })
  .catch((error) => {
    console.error(error); 
  })

}
weatherByCity("London");

// leave lines below for tests to work properly
export { weatherByCity }



import fetch from "node-fetch";
const openWeatherApiKey: string = process.env.OPENWEATHER_API_KEY || "";

function weatherByZipcode(zipcode, countryCode,): Response<void> {
  // code the function here
  return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countryCode}&appid=${openWeatherApiKey}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  }) 
}

function weatherByLatitudeAndLongitude(latitude, longitude): Response<void> {
  // code the function here
  return fetch(`http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt={cnt}&appid=${openWeatherApiKey}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  }) 
}

// leave lines below for tests to work properly
export {
  weatherByZipcode,
  weatherByLatitudeAndLongitude
}

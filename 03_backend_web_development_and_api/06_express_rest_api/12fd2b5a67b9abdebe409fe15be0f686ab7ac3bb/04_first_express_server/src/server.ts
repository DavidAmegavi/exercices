import express from "express"

const app = express();

app.get("/",(request, response) => {
  response.status(200)
  response.send("OK")

});







export {app}; 
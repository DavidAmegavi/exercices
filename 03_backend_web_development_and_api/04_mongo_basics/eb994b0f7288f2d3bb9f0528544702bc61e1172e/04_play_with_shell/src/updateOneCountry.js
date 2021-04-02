/* global db */

// write your MongoDB shell command here
const anotherCountry = {
  name: "Australia", 
  capital: "Sydney", 
  continent: "Oceania", 
}

db.worldAtlas.insertOne(anotherCountry)
db.worldAtlas.updateOne( {name: "Australia" }, {$set: { capital: "Canberra" }} )
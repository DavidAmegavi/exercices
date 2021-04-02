/* global db */

// write your MongoDB shell command here

const otherCountry = [ 
{
  name: "France",
  capital: "Paris",
  continent: "Europe", 
},

{
  name: "Togo",
  capital: "Lomé",
  continent: "Afrique", 
},

{
  name: "RDC",
  capital: "Kinshasa",
  continent: "Afrique", 
},

]


db.worldAtlas.insertMany(otherCountry)

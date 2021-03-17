const humanFactory = (humanData = {}) => {
  const human = {
    firstname: "John", 
    lastname: "Doe", 
    genre: "male", 
    job: "unemployed", 
    fullname: function () {
      return (`${this.firstname} ${this.lastname}`); 
    },
    introduction: function () {
      return (`Hello! My name is ${this.fullname()}.`);
    },
  };
  if(humanData.genre)
    return {...human,...humanData};
};
const humans = humanFactory({ lastName: "Toto" });

const createHumans = (array) => {return array.map(humanFactory);};

console.log(humans);
const createHumans = (humans) => {

  
};

module.exports = {
  humanFactory,
  createHumans,
};
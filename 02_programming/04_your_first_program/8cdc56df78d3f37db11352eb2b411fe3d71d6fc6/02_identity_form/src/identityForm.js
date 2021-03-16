const identityForm = (reader) => {
  reader.question("first name ?", (firstname) => {
    console.log(`${firstname} `);
    reader.question("last name ?", (lastname) => {
      console.log(`${firstname} ${lastname} `);
      reader.question("age ?",(age) => {
        console.log(`Your name is ${firstname} ${lastname} and you are ${age}.`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;

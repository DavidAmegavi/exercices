const readyForm = (reader) => {
  reader.question("Are you ready for today ??!",(response) => {
    console.log("Hello David!");
    console.log(`${response}??!! Really Nice! Let's goo !!.`);
    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;

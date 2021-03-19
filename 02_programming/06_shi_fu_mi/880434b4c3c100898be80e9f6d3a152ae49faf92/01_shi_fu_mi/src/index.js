const readline = require("readline");

// 1 start the game 
// 2 greet the player and give the rules 
// 3 ask a input to the player 
// 4 turn userinput into usermove
// 5 choose the random move for CPU 
// 6 Compare usermove vs CPUmove 
// 7 say if the player Win or loose 


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  
});

const clear = () => console.log("\x1B[2J\x1B[0f");

// user part 

const move = 
[ 
[
  "    ________        ",
  "---'   _ ,  |       ",
  "      (__(__)       ",
  "      (_____)       ",
  "      (____)        ",
  "---.__(___)         ",
],
[
  "      _______       ",
  "----'    ____)____  ",
  "            _______)",
  "            _______)",
  "           _______) ",
  "----.__________)    ",
],
[
  "    ____           ",
  "---'    |________  ",
  "     (__)________) ",
  "        _________) ",
  "      (____)       ",
  "---.__(___)        ",
]
];

/*reader.question("What is your name   ", (name) => {
  console.log(`Hello ! ${name} Welcome to ShiFuMi\nTo start the game choose between 3 Rock Paper and Scissors\n\nI'm sure you already play to that game but not with a CPU so let's get started\nGood luck !\n\n`);
reader.question("Choose a move:\nRock Paper Scissors? [1, 2, 3]"   ,setUserFirstMove);
});*/

function setUserFirstMove (userInput){ 
  // clear(); 

  
   if(userInput === "1"){
     move[0].forEach(element1 => {
         console.log(element1);
       });
       return userInput;
   } else if(userInput === "2"){
     move[1].forEach(element1 => {
       console.log(element1);
     });
     return userInput;
   } else if (userInput === "3"){
     move[2].forEach(element1 => {
       console.log(element1);
     });
     return userInput;
   }
}
    

   function setCpuFirstMove(){
 
    let randomNumber = Math.round(Math.random() * (3 - 1) + 1);
    if(randomNumber === 1){
      move[0].forEach(element1 => {
        console.log(element1);
      });
      return randomNumber;
  
    } else if(randomNumber === 2){
      move[1].forEach(element1 => {
        console.log(element1);
      });
      return randomNumber;

    } else if (randomNumber === 3){
      move[2].forEach(element1 => {
        console.log(element1);
      });
      return randomNumber;

    }
  
  }
   

  //let cpuAnswer = setCpuFirstMove();
  function compare(userInput,cpuAnswer){
    if(cpuAnswer === userInput){
      console.log('draw'); 
    }else if (userInput === "1" && cpuAnswer === "3" || userInput === "2" && cpuAnswer === "1" ||  userInput === "3" && cpuAnswer === "1" ){
      console.log('YOU WIN'); 
    }else if (cpuAnswer === "1" && userInput === "3" || cpuAnswer === "2" && userInput === "1" || cpuAnswer === "3" && userInput === "1"){
      console.log("YOU LOOSE"); 
    }
  }
function startGame(reader) {
reader.question("What is your name   ", (name) => {
  console.log(`Hello ! ${name} Welcome to ShiFuMi\nTo start the game choose between 3 Rock Paper and Scissors\n\nI'm sure you already play to that game but not with a CPU so let's get started\nGood luck !\n\n`);
reader.question("Choose a move:\nRock Paper Scissors? [1, 2, 3]"   ,setUserFirstMove);

  console.log("buggg");
  setCpuFirstMove();
  let cpuAnswer = setCpuFirstMove();
  compare(reader,cpuAnswer);
  }
  else
  return 0;
});
}

startGame(reader);
//setUserFirstMove(userInput);







// reader.question("What is your name   ", (name) => {
//   console.log(`Hello ! ${name} Welcome to ShiFuMi\nTo start the game choose between 3 Rock Paper and Scissors\n\nI'm sure you already play to that game but not with a CPU so let's get started\nGood luck !\n\n`);
//     reader.close(); 
//   })


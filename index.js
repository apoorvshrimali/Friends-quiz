// ------ Module Imports------
var readLineSycn = require("readline-sync")
var chalk = require("chalk")



// ------ Business Logic------
var score = 0
var userName = readLineSycn.question("Whats Your Name")
console.log("Welcome" + userName + "to do You Know FRIENDS")



function play(question, answer,options) {
  console.log(question)
  for(let i =0 ; i < options.length; i++){
    console.log(`${i}) `,options[i])
  }
  var userAnswer = readLineSycn.question("Answer >")
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("RIGHT")
    score = score + 1

  } else {
    console.log("WRONG")
    score = score - 1

  }
  console.log("Current score:", score)
  console.log("------------------")
}




var question = [{
  question: "HOW MANY CHARCTERS ARE IN SHOW?",
  options:[6,8,10,14],
   answer:"6"
},
{
  question: "HOW MAY SEASONS ARE IN SHOW?",
  options:[10,8,10,14],
  answer:"10"
  
},
{
  question: "WHAT WAS JOEYS FAVOURITE FOOD?",
  options:["SANDWICHES","Vada Pav","Pizza","Pasta"],
  answer:"SANDWICHES"
 
},
{
  question: "WHO GOT MARRIES WITH EACH OTHER",
  options:["MONICA AND CHANDLER","ROSS AND RACHAEL","JOEY AND PHOEBE","ROSS AND PHOEBE"
  ],
  answer:"MONICA AND CHANDLER"
 
},
{
  question: "WHERE DID ROSS WORK?",
  options:["MUESUEM","ART GALLERY","WINE SHOP","GIFT SHOP"],
  answer:"MUESUEM"
  
},
{
  question: "HOw MANY GIRLFRIENDS DID JOEY HAVE?",
  options:[15,10,1,3],
  answer:"15" 
}];

for (var i = 0; i < question.length; i++) {
  var currentquestion = question[i]
  play(currentquestion.question, currentquestion.answer,currentquestion.options)
}
console.log("CONGRATULATIONS!! YOUR SCORE", score)
console.log("CHECK YOUR SCORE")


// https://meet.google.com/cgh-pkqc-wyj
var inquirer = require('inquirer');
var countdown = 10;
var myWord = 'dolphin';
var dashes = '';
var myGuesses = [];

function isGameOver () {
  return countdown < 1;
}

var initDashes = function () {
  var wArr = myWord.split('');
  for (i in wArr){
    if (wArr[i] == ' '){
      dashes += ' ';
    } else {
      dashes += '-';
    }
    
  }
}


var requestLetter = function(cb){
  inquirer.prompt([{
    type: "input",
    message: "Enter a letter",
    name: "guess"
  }]).then(function(letter){
    // console.log(myGuesses.indexOf(letter.guess));
    if (myGuesses.indexOf(letter.guess) > -1) {
      console.log("You've tried this letter. Choose another letter");
    }
    else if (myWord.indexOf(letter.guess) > -1){
        console.log("letter is in word!");
        myGuesses.push(letter.guess);
    } 

    else if (myWord.indexOf(letter.guess) == -1) {
      console.log("try again");
      countdown--;
    }

    cb();
  });
}


var play = function(cb){
  var self = this;
  console.log(dashes);
  console.log("Guesses remaining: " + countdown);
  if (isGameOver()){
    cb();
  } else {
    requestLetter(function(){
      play(cb);
    });
  }
}

initDashes();
play(function(){
  console.log("game over");
});
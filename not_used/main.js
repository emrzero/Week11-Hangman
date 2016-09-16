var inquirer = require('inquirer');

var game = require('./game.js');
//game.word

var letter = require('./letter.js');
//letter.guesses = [];
//letter.dashes = '';

function GameSetup() {
  this.countdown = 3;
}

GameSetup.prototype.isGameOver = function () {
  return this.countdown < 1;
}



var requestLetter = function(cb){
  inquirer.prompt([{
    type: "input",
    message: "Enter a letter",
    name: "guess"
  }]).then(function(userInput){

    if (letter.guesses.indexOf(userInput.guess) > -1) {
      console.log("You've tried this letter. Choose another letter");
    }

    else if (game.word.indexOf(userInput.guess) > -1){
        console.log("letter is in word!");
        letter.guesses.push(userInput.guess);
    } 

    else if (game.word.indexOf(userInput.guess) == -1) {
      console.log("try again");
      myGame.countdown--;
    }

    cb();
  });
}


var play = function(cb){
  var self = this;
  console.log(letter.dashes);
  console.log("Guesses remaining: " + myGame.countdown);
  if (myGame.isGameOver()){
    cb();
  } else {
    requestLetter(function(){
      play(cb);
    });
  }
}

var myGame = new GameSetup();

letter.init(letter.guesses, game.word);
play(function(){
  console.log("Game Over");
});



var prompt = require ('prompt');
var word = require ("./word.js");

function Game () {
  this.wordbank = ["negotiable", "magic", "style", "sweat"];
  this.wordsWon = 0;
  this.guessesRemaining = 6;

  this.gameStart = function (w) {
    var self = this;
    this.resetGuessesRemaining = function() {
      self.guessesRemaining = 6;
    }


  }
}
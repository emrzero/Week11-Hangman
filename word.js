var lc = require("./l.js");

// console.log(lc("dolphin"));

var wurd = function (word) {
  var self = this;
  this.word = word;
  this.lets = lc(word);
  this.strCombined = "";
  this.found = false;
  this.getLets = function() {
    self.strCombined = "";
    for (var i = 0; i < self.lets.length; i++) {
      if (self[i].dash) {
        self.strCombined += "_";
      } else {
        self.strCombined += self[i].char;
      }
    }
  }

  this.didWeFindWord = function () {
    self.found = (self.strCombined.indexOf("_") == -1);
  }

  this.letterFound = function (l) {
    for (var i = 0; i < self.lets.length; i++) {
      return l == self.lets[i].char;
    }
  }
}

module.exports = wurd;
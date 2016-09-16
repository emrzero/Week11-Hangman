// contains all of the methods which will check the letters guessed versus the random word selected
exports.check = function(guesses, word) {
  //guessess should be an array
  //word is in string format
  var wArr = word.split('');

  guessess.forEach(function(el){
    wArr.forEach(function(ltr){
      if(guesses[el] == wArr[ltr]){
        console.log(guesses[el] + ' ' + ltr);
      }
    });
  });
}
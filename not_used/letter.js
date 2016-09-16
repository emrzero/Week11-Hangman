// control whether or not a letter appears as a "_" or as itself on-screen.
exports.guesses = [];
exports.strOutput = '';
exports.arrDashes = [];

exports.init = function(guesses, word){
  var wArr = word.split('');
  
  for (i in wArr){
    if (wArr[i] == ' '){
      this.strOutput += ' ';
      this.arrDashes.push(' ');
    } else {
      this.strOutput += '-';
      this.arrDashes.push('-');
    }
    
  }

  // guesses.forEach(function(el){
  //   if (wArr.indexOf(el)> -1){
  //     //TO DO: Check for multiple occurrences of letter
  //     //and return index of each occurrence
  //     //push to strProgress
  //     console.log(el + " " + wArr.indexOf(el));
  //   }
  // })
}

exports.progress = function () {

}
// var myWord = "dolphin";


var LettersConstructor = function(myWord){
  function Letter (l) {
    this.char = l;
    this.dash = true;
  }

  var myArr = [];

  myWord.split('').forEach(function(el){
    var ltr = new Letter(el);
    myArr.push(ltr);
  });

  return myArr;
}

module.exports = LettersConstructor;


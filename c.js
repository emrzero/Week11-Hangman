var myWord = "dolphin";

function Letter (l) {
  this.letter = l;
  this.dash = true;
}

var myArr = [];

myWord.split('').forEach(function(el){
  var ltr = new Letter(el);
  myArr.push(ltr);
});

console.log(myArr);
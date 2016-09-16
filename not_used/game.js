//randomly select a word for the player.

var words = ['tree', 'bird', 'squirrel', 'blue whale'];

exports.word = words[Math.floor(Math.random()*words.length)];

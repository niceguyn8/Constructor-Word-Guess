//Random character (Soccer player) is selected and exported
var words = ['Messi', 'Ronaldo', 'Drogba', 'Lampard', 'Neymar', 'Pogba'];
var word = Math.floor(Math.random() * words.length);
var randomWord = words[word];

module.exports = randomWord;

var Letter = require('./Letter.js');
//Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
function Word(hiddenWord) {

// An array of new Letter objects representing the letters of the underlying word
    this.hiddenLetters = [];

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    hiddenWord.split('').forEach(character => {
        this.hiddenLetters.push(new Letter(character));
    });

  // hiddenWord.split('').forEach = function (character) {
  //   this.hiddenLetters.push(new Letter(character));
  // }

    this.toString = function() {
        return this.hiddenLetters.join(' ');
    }

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.userGuess = function (guessedLetter) {
        this.hiddenLetters.forEach(character => {
            character.userGuess(guessedLetter);
        });
    }

    this.userWin = function() {
        return this.hiddenLetters.every((currentLetter) => currentLetter.revealed);
    }
}


module.exports = Word;

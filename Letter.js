// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
var Letter = function(letter) {

    this.letter = letter;
    this.revealed = false;

// A string value to store the underlying character for the letter
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.toString = function() {
        return this.revealed ? this.letter : '_';
    }

// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.userGuess = function(guess) {
      // A boolean value that stores whether that letter has been guessed yet
        if (this.letter === guess) {
            this.revealed = true;
        }
    }
}

module.exports = Letter;

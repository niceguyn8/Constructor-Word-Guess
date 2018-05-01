var Word = require('./Word.js');
var inquirer = require('inquirer');

var wordBank = ["apple", "orange", "grape", "bannana"];

var selection;
var selectedWord;
var userGuesses;
var numGuesses;

    function randomWord(wordBank) {
        var randomWrd = Math.floor(Math.random() * wordBank.length);
        return wordBank[randomWrd];
    }

var userPrompt = [
    {
        name: 'letterGuessed',
        message: 'Guess a letter',
        validate: function (userInput) {
            var guess = (userInput.length === 1) && ('abcdefghijklmnopqrstuvwxyz'.indexOf(userInput.charAt(0)) !== -1);
            return guess || 'Please enter a single letter';
        },
        when: function () {
            return (!selection.userWin() && numGuesses > 0);
        }
    },
    {
        type: 'confirm',
        name: 'tryAgain',
        message: 'Try again?',
        when: function () {
            return (selection.userWin() || numGuesses <= 0);
        }
    }
];

function reset() {
    selectedWord = randomWord(wordBank);
    selection = new Word(selectedWord);
    selection.userGuess(' ');
    userGuesses = [];
    numGuesses = 5;
}

function gameStart() {
    if (!selection.userWin() && numGuesses > 0) {
        console.log(selection + '');
    }

    inquirer.prompt(userPrompt).then(answers => {
        if ('tryAgain' in answers && !answers.tryAgain) {
            console.log('Ok. See you next time!');
            process.exit();
        }
        if (answers.tryAgain) {
            reset();
        }

        if (answers.hasOwnProperty('letterGuessed')) {
            var currentGuess = answers.letterGuessed;

            if (userGuesses.indexOf(currentGuess) === -1) {
                userGuesses.push(currentGuess);
                selection.userGuess(currentGuess);
                if (selectedWord.indexOf(currentGuess) === -1) {
                    numGuesses--;
                }
            } else {
                console.log('Nope! You already guessed', currentGuess);

            }
        }

        if (!selection.userWin()) {
            if (numGuesses < 1) {
                console.log('WRONG! WRONG! WRONG! Out of guesses');
                console.log(selectedWord, 'is the word!.');

            } else {
                console.log('You have guessed :', userGuesses.join(' '));
                console.log('Guesses left:', numGuesses);
            }

        } else {
            console.log(selectedWord, 'is correct!');
        }

        gameStart();
    });
}
reset();
gameStart();

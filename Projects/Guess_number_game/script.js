const randmNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Enter a valid number")
    }
    else if (guess < 1) {
        alert("Enter a number bigger than 0")
    }
    else if (guess > 100) {
        alert("Enter a number smaller than 100")
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            dispalyGuess(guess)
            dispalyMessage(`Game Over . Randome number was ${randmNumber}`)
        }
    }
}

function cheakGuess(guess) {
    //
}

function dispalyGuess(message) {
    //
}

function dispalyMessage(message) {
    //
}

function endGame() {
    //
}

function NewGame() {
    //
}
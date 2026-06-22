let randmNumber = parseInt(Math.random() * 100 + 1);

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
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            dispalyGuess(guess)
            dispalyMessage(`Game Over . Randome number was ${randmNumber}`);
            endGame();

        }
        else {
            dispalyGuess(guess)
            cheakGuess(guess);
        }
    }
}


function cheakGuess(guess) {
    if (guess === randmNumber) {
        dispalyMessage(`You guessed it right`)
        endGame()

    }
    else if (guess < randmNumber) {
        dispalyMessage(`Number is to low `)
    }
    else if (guess > randmNumber) {
        dispalyMessage(`Number is to higer `)
    }
}

function dispalyGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function dispalyMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id='newGame'>Start new Game</button>`

    startOver.appendChild(p)
    playGame = false;
    NewGame();
}

function NewGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        let randmNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;

    })
}
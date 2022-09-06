const startBtn = document.querySelector('.game__btn');
const gameOutput = document.querySelector('.game__output');
const gameGuess = document.querySelector('.game__guess');
const gameTryNumber = document.querySelector('.game__try-number');
const gamebtnHigh = document.querySelector('.game__btn--high');
const gamebtnLow = document.querySelector('.game__btn--low');
const gamebtnYes = document.querySelector('.game__btn--yes');
const newGame = document.querySelector('.new-game');
const gamebtnNewGame = document.querySelector('.game__btn--new-game');

const gameData = {
    arrayLength: 100,
    numbersArray: [],
    tryNumber: 0,
    low: 0,
    high: 0,
    guess: 0,
}

fillArray(gameData);

function fillArray(object) {
    for (let i = 0; i < object.arrayLength; i++) {
        object.numbersArray[i] = i + 1;
    }
}

startBtn.addEventListener( 'click', () => firstGuess(gameData) );
gamebtnHigh.addEventListener( 'click', () => guessIsHigh(gameData) );
gamebtnLow.addEventListener( 'click', () => guessIsLow(gameData) );
gamebtnYes.addEventListener( 'click', () => guessIsYes() );
gamebtnNewGame.addEventListener( 'click', () => anotherGame(gameData) );

function showNumber(object) {
        gameTryNumber.innerHTML = `Попытка № ${object.tryNumber}`;
        gameGuess.innerHTML = `Это число ${object.guess}?`;
        gameOutput.style.display = "block";
        console.log(`${object.low} - ${object.high}`)
        if (object.low === object.high) {
            gamebtnHigh.disabled = true;
            gamebtnLow.disabled = true;
        }

}

function firstGuess(object) {
    ++object.tryNumber;
    object.high = object.arrayLength - 1;
    object.guess = object.numbersArray[Math.floor((object.low + object.high)/2)];
    showNumber(object);
    startBtn.disabled = true;
    
}

function guessIsHigh(object) {
    ++object.tryNumber;
    object.high = object.numbersArray.indexOf(object.guess) - 1;
    object.guess = object.numbersArray[Math.floor((object.low + object.high)/2)];
    showNumber(object);
}

function guessIsLow(object) {
    ++object.tryNumber;
    object.low = object.numbersArray.indexOf(object.guess) + 1;
    object.guess = object.numbersArray[Math.floor((object.low + object.high)/2)];
    showNumber(object);
}

function guessIsYes() {
    gamebtnHigh.disabled = true;
    gamebtnLow.disabled = true;
    gamebtnYes.disabled = true;
    newGame.style.display = "block";
}

function anotherGame(object) {
    object.tryNumber = 0;
    object.low = 0;
    object.high = 0;
    object.guess = 0;
    gameOutput.style.display = "none";
    newGame.style.display = "none";
    startBtn.disabled = false;
    gamebtnHigh.disabled = false;
    gamebtnLow.disabled = false;
    gamebtnYes.disabled = false;
}
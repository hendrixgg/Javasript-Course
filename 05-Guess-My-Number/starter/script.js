'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1,
    score = 20,
    highscore = 0,
    gameOver = false;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const checkGuess = function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    if (!guess) {
        displayMessage(`⛔ No number!`);
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage(`🎉Correct number!`);
        document.querySelector('.highscore').textContent = highscore = Math.max(
            score,
            highscore
        );
        gameOver = true;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (--score === 0) {
        displayMessage(`😣 You Lose!`);
        gameOver = true;
    } else {
        displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
    }
    document.querySelector('.score').textContent = score;
};

const resetGame = function () {
    gameOver = false;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = `?`;
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector('.score').textContent = score = 20;
    document.querySelector('.guess').value = ``;
};

document.querySelector('.check').addEventListener('click', function () {
    if (gameOver) return;
    checkGuess();
});
document.querySelector('.again').addEventListener('click', function () {
    resetGame();
});
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (gameOver) resetGame();
        else checkGuess();
    }
});

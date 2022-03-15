"use strict";

// Elements
const scoreEl = [
    document.getElementById("score--0"),
    document.getElementById("score--1"),
];
const currentEl = [
    document.getElementById("current--0"),
    document.getElementById("current--1"),
];
const section = [
    document.querySelector(".player--0"),
    document.querySelector(".player--1"),
];
const diceEl = document.querySelector(".dice");
let score, currentScore, activePlayer, playing;

const setPlayer = function (who) {
    section[who].classList.remove("player--winner");
    section[who].classList.add("player--active");
    currentEl[who ^ 1].textContent = currentScore = 0;
    section[who ^ 1].classList.remove("player--active", "player--winner");
};
const init = function () {
    score = [0, 0];
    currentScore = 0;
    playing = true;
    scoreEl[0].textContent = scoreEl[1].textContent = 0;
    setPlayer((activePlayer = 0));
    diceEl.classList.add("hidden");
};
init();

// NEW GAME
document.querySelector(".btn--new").addEventListener("click", init);

// ROLL DICE
document.querySelector(".btn--roll").addEventListener("click", function () {
    if (!playing) return;
    // gen roll
    const roll = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.src = `dice-${roll}.png`;
    diceEl.classList.remove("hidden");

    // rolled 1: toggle player and reset current score
    if (roll === 1) {
        setPlayer((activePlayer ^= 1));
    } else {
        // add roll to current score
        currentEl[activePlayer].textContent = currentScore += roll;
    }
});

// HOLD
document.querySelector(".btn--hold").addEventListener("click", function () {
    if (!playing) return;
    scoreEl[activePlayer].textContent = score[activePlayer] += currentScore;
    diceEl.classList.add("hidden");
    if (score[activePlayer] < 10) {
        setPlayer((activePlayer ^= 1));
        return;
    }
    // active player wins
    section[activePlayer].classList.remove("player--active");
    section[activePlayer].classList.add("player--winner");
    currentEl[activePlayer].textContent = 0;
    playing = false;
});

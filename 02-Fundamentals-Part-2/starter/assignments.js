"use strict";

// LECTURE: Functions

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} people and its capital city is ${capitalCity}`;
// }

// console.log(describeCountry(`Canada`, 3.83e7, `Ottawa`));

// LECTURE: Function Declarations vs. Expressions

const populationOfWorld = 7.9e9;

function percentageOfWorld1(population) {
    return population / populationOfWorld * 100;
}

const populations = [1e9, 4.4e7, 3.2e8];
for (let i = 0; i < 3; ++i) {
    console.log(percentageOfWorld1(populations[i]));
}

const percentageOfWorld2 = function (population) {
    return population / populationOfWorld * 100;
}

for (let i = 0; i < 3; ++i) {
    console.log(percentageOfWorld2(populations[i]));
}
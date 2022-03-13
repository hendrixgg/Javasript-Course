// // LECTURE: Values and Variables
// const country = 'Canada';
// const continent = "North America";
// let population = 3.83e7;
// console.log('country = ' + country);
// console.log('continent = ' + continent);
// console.log('population = ' + population);

// // LECTURE: Data Types
// const isIsland = false;
// let language;
// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

// // LECTURE: let, const, and var
// language = "english";
// also changed country and continent variables to const

// LECTURE:  Basic Operators

// // 1.
// console.log(population / 2);

// // 2.
// console.log(population + 1);

// // 3.
// const populationFinland = 6e6;
// console.log(population > populationFinland);

// // 4.
// const averagePopulation = 3.3e7;
// console.log(population > averagePopulation);

// // 5. 
// const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
// console.log(description);

// LECTURE: Type conversion and coercion
// predict the following results:

// console.log('9' - '5',/* 4 */
//     '19' - '13' + '17',/* `617` */
//     '19' - '13' + 17, /* 23 */
//     '123' < 57, /* false */
//     5 + 6 + '4' + 9 - 4 - 2); /* 1143 */


// LECTURE: Equality Operators (== vs. ===)

let numNeighBours = Number(prompt(`How many neighbour countries does your country 
have?`));

if (numNeighBours === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighBours > 1) {
    console.log(`More than 1 border`)
} else {
    console.log(`No borders`);
}

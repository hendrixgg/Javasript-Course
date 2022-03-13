/* let js = "amazing";

console.log(40 + 8 + 23 - 10);

let firstName = "Matias";
let PI = 2;
console.log(firstName);


// variable name conventions
let myFirstJob = "Programmer";
let mySecondJob = "Teacher";
let $function = 'f';

let job1 = 'Programmer', job2 = 'Teacher'; */

// datatypes
/*
false;
console.log(false);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "matias");

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let age;
console.log(age);
console.log(typeof age);

age = 18;

console.log(typeof age);

console.log(typeof null); */


// let, const, and var

/* let age = 20;
age = 21;

const birthYear = 2004;
// birthYear = 2005;


var job = "coder";
job = "football player";

// bad practice

lastName = "Gryspeerdt";
console.log(lastName); */


// basic operators
/*
// math
const now = 2023;
const ageMatias = now - 2003, ageAdrian = now - 2005;
console.log(ageMatias, ageAdrian);
console.log(ageMatias * 2, ageMatias / 2, 2 ** 3, 1 << 10);
// x ** y = x to the power of y

// string

const firstName = "Matias";
const lastName = "Solus";
console.log(firstName + " " + lastName);

// more math

let x = 10 + 5;
console.log(x); // prints 15 because + operator has presedence over = operator
x += 10; // add
console.log(x);
x *= 4; // multiply
console.log(x);
++x;// increment
console.log(x);
--x;
console.log(x);

console.log(ageMatias > ageAdrian);
 */

// operator precedence

/* console.log(100 - 5 > 100 - 10);

let x, y;
x = y = 100;
console.log(x, y);

const now = 2023;
const ageMatias = now - 2003, ageAdrian = now - 2005;
console.log(ageMatias, ageAdrian);
console.log((ageMatias + ageAdrian) / 2); */

// LECTURE: Strings and Template Literals

/* const firstName = "Matias";
const job = "student";
const birthYear = 2002, year = 2022;

const matias = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";
console.log(matias);


const matiasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(matiasNew);

console.log(`Just a regular string...`);

console.log(`String
with
multiple
lines.`); */


// LECTURE: Type Conversion and Coercion

/*
// type conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number(`Matias`));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log(`I am ` + 23 + ` years old`);
console.log(`I am ` + String(23) + ` years old`);
console.log(`23` - `10` - 3);
console.log(`20` * `2`);

let n = `1` + 1; // 11

n = n - 1;

console.log(n);

console.log(2 + 3 + 4 + `5`); // `95`

console.log(`10` - `4` - `3` - 2 + `5`); // 15 */

// LECTURE: Truthy and Falsy Values

// 5 falsy values: 0, ``, undefined, null, NaN

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Matias`));
console.log(Boolean({}));
console.log(Boolean(``));

const money = -1;

if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job`);
}

let height = 0;

if (height) { /// if height is 0 the this will be false
    console.log(`yay, height is denfined`);
} else {
    console.log(`height is undefined`);
} */

// LECTURE: Equality Operators: == vs. ===

/* const age = `18`;

if (age === 18) console.log(`You are an adult!`); // always use this operator

if (age == 18) console.log(`you are an adult! (loose)`); // this performs type coercion

const favoriteNumber = Number(prompt(`What's your favorite number?`));

console.log(favoriteNumber);
console.log(typeof favoriteNumber);

if (favoriteNumber === 23) {
    console.log(`Cool! 23 is a great number!`);
} else if (favoriteNumber === 7) {
    console.log(`7 is also a cool number!`);
} else {
    console.log(`Not 23 or 7`);
}

if (favoriteNumber !== 23) console.log(`Why not 23?`); */

// LECTURE: The switch Statement

const day = `monday`;

if (day === `monday`) {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === `tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write code examples`);
} else if (day === `friday`) {
    console.log(`Record videos`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`Enjoy the weekend`);
} else {
    console.log(`Not a valid day`);
}

switch (day) {
    case `monday`:
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day`);
        break;
}


"use strict"; // <--- from activating strct mode

// LECTURE: Activating Strict Mode

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriverLicense = true;
}

if (hasDriversLicense) {
    console.log(`I can drive :D`);
}

const interface = `Audio`;

const private = 999; */

// LECTURE: Functions

/* function logger() {
    console.log(`My name is Matias`);
}
logger(22);
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apple(s) and ${oranges} orange(s).`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */


// LECTURE: Function Declarations vs. Expressions

/*
// function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(2002);
console.log(`function declaration:`, age1);

// function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};

const age2 = calcAge2(2002);
console.log(`function expression:`, age2) */

// arrow function
/* const calcAge3 = birthYear => 2022 - birthYear;

const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(2003));

const add3Numbers = (num1, num2, num3) => {
    return `${num1} + ${num2} + ${num3} = ${num1 + num2 + num3}`;
}

console.log(add3Numbers(1, 2, 3)); */


// LECTURE: Arrays

/* const friends = ['joe', 'jim', 'bob'];

console.log(friends);
console.log(friends[0]);

const nums = new Array(1, 2, 3, 4, 5);
console.log(nums);
console.log(`${nums.length} numbers in the nums array`);

friends[1] = `allison`; // can do

console.log(friends);

const matias = [`Matias`, `Solus`, 2022 - 2002, `teacher`, friends, nums];
console.log(matias);

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};

console.log(calcAge2(nums)); */

// LECTURE: Basic Array Operations (Methods)

/* const nums = new Array(1, 2, 3, 4, 5);

// add elements
console.log(nums.push(`jonny`));
console.log(nums.unshift(-999));

console.log(nums);

//remove elements
console.log(nums.pop()); // removes and returns the last element in the array

console.log(nums.shift()); // removes and returns the first element in the array

console.log(nums);

// locate elements
console.log(nums.indexOf(3));
console.log(nums.indexOf(200));


console.log(nums.includes(4));
console.log(nums.includes(23));
console.log(nums.includes(`2`)); */

// Objects

/* const matias = {
    firstName: `Matias`,
    lastName: `Solus`,
    age: 20,
    job: `coder`,
    friends: [`Billy`, `Bob`, `Joe`]
};

console.log(matias);
console.log(matias[`firstName`]);
console.log(matias.lastName);

let interestedIn = matias[prompt(`What do you want to know about Matias?
Options: firstName, lastName, age, job, friends`)];

if (interestedIn) {
    console.log(interestedIn);
} else {
    console.log(`invalid request`);
}

// while (!interestedIn) {
//     console.log(`invalid request`);
//     interestedIn = matias[prompt(`What do you want to know about Matias?
// Options: firstName, lastName, age, job, friends`)];
// }
// console.log(interestedIn);

matias.location = `home`;
matias[`sport`] = `skiing`;

console.log(matias);

console.log(`${matias.firstName} has ${matias.friends.length} friends and his best friend is called ${matias.friends[0]}`); */

/* const matias = {
    firstName: `Matias`,
    lastName: `Solus`,
    birthYear: 2002,
    job: `coder`,
    friends: [`Billy`, `Bob`, `Joe`],
    hasDriversLicence: true,
    calcAge: function (currentYear) {
        return this.age ? this.age : (this.age = currentYear - this.birthYear);
    },
    summarry: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old coder and he has ${this.hasDriversLicence ? `a` : `no`} drivers licence.`;
    }
};

console.log(matias.calcAge(2022));
console.log(matias.summarry()); */

// loops

// prints 0, 1, ..., 9
for (let i = 0; i < 10; ++i) {
    console.log(i);
}

const matias = [`Matias`, `Solus`, 2022 - 2002, `teacher`];
const type = [];
for (let i = 0; i < Number(matias.length); ++i) {
    console.log(matias[i], typeof matias[i]);
    type.push(typeof matias[i]);
}
console.log(type);

// continue and break work the same as in c++ and java

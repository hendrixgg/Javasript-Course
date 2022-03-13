let markMass, markHeight, markBMI;
let johnMass, johnHeight, johnBMI;
let markHigherBMI;
// case 1:
markMass = 78, markHeight = 1.69, johnMass = 92, johnHeight = 1.95;
markBMI = markMass / markHeight ** 2, johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher thatn Johns!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher thatn Johns (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`);
}



// case 2: 
markMass = 95, markHeight = 1.88, johnMass = 85, johnHeight = 1.76;
markBMI = markMass / markHeight ** 2, johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher thatn Johns!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher thatn Johns (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
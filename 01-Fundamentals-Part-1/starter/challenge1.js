let markMass, markHeight, markBMI;
let johnMass, johnHeight, johnBMI;
let markHigherBMI;
// case 1:
markMass = 78, markHeight = 1.69, johnMass = 92, johnHeight = 1.95;
markBMI = markMass / markHeight ** 2, johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log("mark higher BMI? " + markHigherBMI);

// case 2: 
markMass = 95, markHeight = 1.88, johnMass = 85, johnHeight = 1.76;
markBMI = markMass / markHeight ** 2, johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log("mark higher BMI? " + markHigherBMI);

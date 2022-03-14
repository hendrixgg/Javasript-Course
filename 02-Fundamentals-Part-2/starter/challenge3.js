const mark = {
    firstName: `Mark`,
    lastName: `Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.BMI = this.mass / this.height ** 2;
    }
};
const john = {
    firstName: `John`,
    lastName: `Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / this.height ** 2;
    }
};

console.log(mark.calcBMI(), john.calcBMI());
if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's BMI (${john.calcBMI()})`);
} else if (mark.calcBMI() < john.calcBMI()) {
    console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's BMI (${mark.calcBMI()})`);
} else {
    console.log(`Mark and John both have the same BMI (${mark.calcBMI()})`);
}
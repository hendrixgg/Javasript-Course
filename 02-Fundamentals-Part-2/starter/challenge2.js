'use strict';
/* Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. */

const calcTip = function (bill) {
    return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(`bills:`, bill);
console.log(`tips: `, tip);
console.log(`totals: `, total);
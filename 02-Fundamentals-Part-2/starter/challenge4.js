const calcTip = function (bill) {
    return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = new Array(bills.length), totals = new Array(bills.length);

for (let i = 0; i < bills.length; ++i) {
    totals[i] = bills[i] + (tips[i] = calcTip(bills[i]));
}

function calcSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i)
        sum += arr[i];
    return sum;
}

function calcAverage(arr) {
    return calcSum(arr) / arr.length;
}
console.log(`bills: `, bills);
console.log(`tips: `, tips);
console.log(`totals: `, totals);

console.log(`totals average: ${calcAverage(totals)}`);
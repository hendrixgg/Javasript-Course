const bill = [275, 40, 430];

for (let i = 0; i < 3; ++i) {
    const tip = (50 <= bill[i] && bill[i] <= 300) ? bill[i] * 0.15 : bill[i] * 0.2;
    console.log(`The bill was ${bill[i]}, the tip was ${tip}, and the total value was ${bill[i] + tip}`);
}

console.log(`cool shiz 😀😎👍🧙‍♂️`);
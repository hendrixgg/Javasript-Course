const dolphins = [[96, 108, 89], [97, 112, 101], [97, 112, 101]];
const koalas = [[88, 91, 110], [109, 95, 123], [109, 95, 106]];

for (let i = 0; i < 3; ++i) {
    console.log(`data set ${i}:`);
    // compare averages
    let dolphinsScore = 0, koalasScore = 0;
    for (let j = 0; j < 3; ++j) {
        dolphinsScore += dolphins[i][j];
        koalasScore += koalas[i][j];
    }
    dolphinsScore /= 3, koalasScore /= 3;
    console.log(`just average:`);
    if (dolphinsScore > koalasScore) {
        console.log(`dolphins win!`);
    } else if (koalasScore > dolphinsScore) {
        console.log(`koalas win!`);
    } else {
        console.log(`tie!`);
    }

    // min score of 100
    console.log(`min score of 100:`);
    if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
        console.log(`dolphins win!`);
    } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
        console.log(`koalas win!`);
    } else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
        console.log(`tie!`);
    } else {
        console.log(`invalid`);
    }
}

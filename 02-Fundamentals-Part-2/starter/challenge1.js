const dolphinScores = [[44, 23, 71], [85, 54, 41]];
const koalaScores = [[65, 54, 49], [23, 34, 27]];

const calcAverage = teamScores => (teamScores[0] + teamScores[1] + teamScores[2]) / 3;
// a team only wins if it has at least double the other team's score
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Nobody wins (Koalas:${avgKoalas} vs. Dolphins:${avgDolphins})`);
    }
};
//test 1
checkWinner(calcAverage(dolphinScores[0]), calcAverage(koalaScores[0]));
//test 2
checkWinner(calcAverage(dolphinScores[1]), calcAverage(koalaScores[1]));
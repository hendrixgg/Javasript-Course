const temps = [
  [17, 21, 23],
  [12, 5, -5, 0, 4],
];

const printForecast = function (tempsArr) {
  let forecast = `... ${tempsArr[0]}ºC in 1 day ... `;
  for (let i = 1; i < tempsArr.length; ++i) {
    forecast += `${tempsArr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(forecast);
};

for (let i = 0; i < temps.length; ++i) {
  printForecast(temps[i]);
}

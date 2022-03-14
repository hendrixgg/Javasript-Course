// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// given an array of temperatures, calculate the amplitude of temperature, ignoring NaN values
/* const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const filtered = temperatures.filter((element) => typeof element === `number`);

function max(arr) {
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > maxVal) maxVal = arr[i];
  }
  return maxVal;
}
function min(arr) {
  let minVal = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < minVal) minVal = arr[i];
  }
  return minVal;
}

function amplitude(arr) {
  return max(arr) - min(arr);
}

console.log(amplitude(filtered)); */

const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celsius`,
    value: Number(prompt(`Degrees celsius:`)),
  };
  // console.table(measurement);

  debugger; // opens the debugger in google chrome at this line
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

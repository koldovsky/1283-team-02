// Convert a string to an array https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
// Kostia Zeykin
function stringToArray(string) {
  return string.split(" ");
}

// DNA to RNA Conversion https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// Kostia Zeykin
function DNAtoRNA(dna) {
  return dna.includes("T") ? dna.prototype.replaceAll("T", "U") : dna;
}

// liubomyr Kosteniuk
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

// Find Maximum and Minimum Values of a List https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// Kostia Zeykin
var min = function(list){
    function sortForMin(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    list = list.sort(sortForMin);
    return list[0];
}

//Liubomyr Kosteniuk
var min = function(list) {
  return Math.min(...list);
}
var max = function(list) { 
  return Math.max(...list);
}

// Smallest value of an array https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// Kostia Zeykin
function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  } else {
    return arr.indexOf(Math.min(...arr));
  }
}

//Liubomyr Kosteniuk
function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  if (toReturn === "value") {
    return minValue;
  } else if (toReturn === "index") {
    return arr.indexOf(minValue);
  }
}

// Twice as old https://www.codewars.com/kata/5b853229cfde412a470000d0/solutions/javascript
// Kostia Zeykin
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - (sonYearsOld * 2))
}

// Get Nth Even Number https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
// kostia Zeykin
function nthEven(n){
  return (n * 2) - 2
}

// What's the real floor? https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
// Kostia Zeykin
function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n < 13) {
    return n - 1;
  } else {
    return n - 2;
  }
}

// Beginner Series #2 Clock https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
// Kostia Zeykin
function past(h, m, s) {
  const hoursToMilliseconds = h * 3600000;
  const minutesToMilliseconds = m * 60000;
  const secondsToMilliseconds = s * 1000;
  return hoursToMilliseconds + minutesToMilliseconds + secondsToMilliseconds;
}

// Is n divisible by x and y? https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
// Kostia Zeykin
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
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
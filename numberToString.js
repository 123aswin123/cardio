numberDictionary = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
  100: "Hundred",
  1000: "Thousand",
};

const oneDigitToSting = (input) => {
  if (input > 9) {
    throw "Number more than single digit";
  }
  if (isNaN(input)) {
    throw "The given in input is not an integer";
  }
  if(input==0){

    return '';

  }
  return numberDictionary[input];
};

const twoDigitToSting = (input) => {
  if (input > 99) {
    throw "Number more than 2 digits";
  }
  if (isNaN(input)) {
    throw "The given in input is not an integer";
  }
  if (undefined != numberDictionary[input]) {
    return numberDictionary[input];
  }
  if(input==0){

    return '';

  }
  var twoDigitArray = convertIntToArray(input);
  var onesString = oneDigitToSting(twoDigitArray[1]);
  var tensString = numberDictionary[twoDigitArray[0] * 10];
  return tensString + onesString;
};

const threeDigitToSting = (input) => {
  if (input > 999) {
    throw "Number more than 3 digits";
  }
  if (isNaN(input)) {
    throw "The given in input is not an integer";
  }
  if (undefined != numberDictionary[input]) {
    return numberDictionary[input];
  }

  if(input==0){

    return '';

  }

  var threeDigitArray = convertIntToArray(input);
  var onesString = oneDigitToSting(threeDigitArray[2]);
  var tensString = twoDigitToSting(threeDigitArray[1] * 10);
  var hundredsString = oneDigitToSting(threeDigitArray[0]) + "Hundred";
  return hundredsString + tensString + onesString;
};

const convertIntToArray = (input) => {
  if (isNaN(input)) {
    throw "The given in input is not an integer";
  }
  var numArray = [];
  while (input >= 1) {
    numArray.unshift(input % 10);
    input = Math.floor(input / 10);
  }

  return numArray;
};

const numberToString = function (input) {
  if (isNaN(input)) {
    throw "The given in input is not an integer";
  }
  if (input > 1000) {
    throw "Bigger numbers are WIP.";
  }
  if (input > 99 && input < 1000) {
    return threeDigitToSting(input);
  }
  if (input > 9 && input < 100) {
    return twoDigitToSting(input);
  }
  if (input > 0 && input < 10) {
    return oneDigitToSting(input);
  }
  if (input == 0 ) {
    return "Zero";
  }
};

var a = numberToString(220);
console.log(numberToString(10));
console.log(numberToString(30));
console.log(numberToString(4));
console.log(numberToString(-10));
console.log(numberToString(90));
console.log(numberToString(18));
console.log(numberToString(100));
console.log(numberToString(536));




// Given an array of digital numbers, return a new array of length number containing the last even numbers 
// from the original array (in the same order). The original array will be not empty and will contain
// at least "number" even numbers.

function evenNumbers(array, number) {
  var evenNum = [];
  for (i = 0; i < array.length; i++) {
    if ( array[i] % 2 === 0) {
      evenNum.push(array[i])
    }
  }
  if (evenNum.length > number) {
    while (evenNum.length !== number) {
      evenNum.shift()
    }
  }
  return evenNum
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))
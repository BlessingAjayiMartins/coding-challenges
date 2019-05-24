// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = arr => {
  let binaryString = arr.join('');
  console.log(binaryString)
  return parseInt(binaryString, 2)
};
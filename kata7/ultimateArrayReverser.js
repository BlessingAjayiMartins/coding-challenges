// Given an array of strings, reverse them and their order in such way that their length stays the 
// same as the length of the original inputs.

// use a for loop to start at the end of the array and itterate backwards to a new variable
// we'll need to find a way to make sure the characters in being saved will have the same char amount in each element

const ultimateReverser = s => {
  const arr = [...s.join('')].reverse()
  return s.map(word => arr.splice(0, word.length).join('')
}
console.log(ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]))
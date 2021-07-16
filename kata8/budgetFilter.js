// write a function that takes the 1st argument as your budget the 2nd argument
// is all the prices the function should search and return all the prices that is
// in your budget 

// should be in chronc order // extra points

function budgetFilter (price , ls) {

  const result = [];
  let count = 0;

  for (let i = 0; i < ls.length; i++) {
    if (price >= ls[i]) {
      result[count] = ls[i];
      count++
    }
  }

  return result
}

console.log({
  result: budgetFilter(6, [4, 2, 7, 9, 756, 35, 3, 5, 5])
}); // [4, 2, 3, 5, 5]

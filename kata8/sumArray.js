// Kata 8 
function sum (numbers) {
  var total = 0 ;
  
  if (numbers.length === 0) return 0;
  
  for (i = 0; i < numbers.length; i++) {
    total +=numbers[i];
  }
  
  return total
};
console.log(sum([]));
//console.log(sum.numbers);
//console.log(sum.numbers1);
//console.log(sum.numbers2);

// const properSum = (n) => n.reduce((a, b) => a + b)

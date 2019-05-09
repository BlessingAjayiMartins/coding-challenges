function reverseNumber(n) {
  var x = n.toString().split('').reverse().join('')*1
  const greaterThanZero = num => {return num > 0}
  var y = n.toString().split('').filter(greaterThanZero)
  var z = y.reverse().join('')
  if (n > 0){
    return x
  }
  else 
   return -z
}
console.log(reverseNumber(321))   // should return 123
console.log(reverseNumber(-321))  // should return -123
var reverse = function(x) {
  const limit= 2147483648
  const k = x > 0 ? 1 : -1
  const rev = parseInt(Math.abs(x).toString().split('').reverse().join(''))
  return rev > limit ? 0 : rev * k
};
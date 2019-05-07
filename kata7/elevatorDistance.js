function elevatorDistance(array) {
  var result = 0
  const difference = (a, b) => Math.abs(a - b)
  for (i = 0; i < array.length -1; i++) {
    let first = array[i]
    let second = array[i+1]
    result += difference(first, second) 
  }
  return result
}
console.log(elevatorDistance([5, 2, 8])) // 9
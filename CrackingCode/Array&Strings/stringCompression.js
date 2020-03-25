const compression = (string) => {
  let count = 0
  let result = []
  for(let a = 0; a < string.length; a++) {
    count++
    if (string[a] != string[a+1]) {
      result.push(string[a])
      result.push(count)
      count = 0
    } else {
      continue
    }
  }
  return result.join('')
}
compression('aabcccccaaa')
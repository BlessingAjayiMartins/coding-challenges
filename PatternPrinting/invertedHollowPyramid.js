const invertedHollowPyramid = (num) => {
  const n = num
  let result = []
  
  for (let a = n; a > 0; a--) { //row management
    let arr = Array(num+(num-1)).fill(' ')
    for (let b = 0, c = arr.length-1; b < c; b++, c--) {
      arr[b] = '*'
      arr[c] = '*'
    }
    
    result.push(arr.join(''))
  }
  console.log('Done')
  return result
}

invertedHollowPyramid(4);
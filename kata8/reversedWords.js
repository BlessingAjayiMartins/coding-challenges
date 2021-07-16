function reverseWords(str){

  var result = '';
  const spacesIndexes = []
  const space = ' '
  var word = ''
  var pre = str.length - 1
  var next;
  for (var i = str.length - 1; i > -1; i--){
    var character = str[i]
    result += character
    if (character === space) {
      next = i
      spacesIndexes[i] = returnWord(str, [pre, next])
      pre = i
      next = i
    }
  }
  console.log({ result: result, spacesIndexes: spacesIndexes.reverse() })
  // return result
}

function returnWord(str, array) {
  var result = ''
  for(var i = 0; i < str.length; i++) {
    if (i > array[0] && i < array[1]) {
      result += str[i];
    }
  }
  console.log(result)
  return result;
}

// returnWord('This is my name', [4, 7]);

reverseWords("The greatest victory is that which requires no battle")
// // should return "battle no requires which that is victory greatest The"

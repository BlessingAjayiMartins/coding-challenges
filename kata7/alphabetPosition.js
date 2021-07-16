// given a string, replace every letter with its
// position in the alphabet. If anything in the text isn't a letter, ignore it and
// don't return it. a being 1, b being 2, etc. As an example:

function alphabet_position (sentence) {
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
let result = '';

  for (let i = 0; i < sentence.length; i++) {
    const end = sentence.length - 1;
    const isEnd = i === end;
    
    if (isEnd) {
      result += getNum(sentence[i])
    } else if (getNum(sentence[i]) !== undefined) {
      result += getNum(sentence[i]) + ' '
    }
  }

  function getNum (letter) {
    let getNumResult;
    for (let i = 0; i < alphabet.length; i++) {

      if (letter === alphabet[i]) {
        getNumResult = i + 1
      }
    }

    return getNumResult
  }


  return result
}


// Should return
console.log({ 
  result: alphabet_position("the sunset sets at twelve o clock") // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)
})
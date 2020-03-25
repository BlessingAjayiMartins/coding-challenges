const isPermutationOfPalindrome = (stringPhrase) => {
  let phraseArr = []
  let organize = {}
  let oddCount = 0
  for (let a = 0; a < stringPhrase.length; a++) {
    if (stringPhrase[a] != ' ') {
      phraseArr.push(stringPhrase[a].toLowerCase())
    } else {
      continue
    }
  }

  for (let b = 0; b < phraseArr.length; b++) {
    let char = phraseArr[b]
    if (!organize[char]) {
      organize[char] = 1
    } else {
      organize[char] +=  1
    }
  }

  for (let char in organize) {
    if (organize[char] === 1) {
      oddCount++
    }
  }
  
  if (oddCount === 0 && phraseArr.length % 2 == 0) {
    return true
  } else if (oddCount == 1 && phraseArr.length % 2 == 1) {
      return true
  } else return false
}

console.log(isPermutationOfPalindrome('Tact Coa'))
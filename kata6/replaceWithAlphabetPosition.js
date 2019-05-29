//  variable alphabet holds a-z. index 0-25. create a for loop that parses the string input 
// and compare it to the alphabet variable with the if ... parse the index value +1 to the result value
//  note... if non alphabet skip...

const alphabetPosition = (string) => {
  let result = '';
  let lowerCaseString = string.toLowerCase()
  
  for (let i = 0; i < lowerCaseString.length; i++) {

    const letter = lowerCaseString[i]
    const position = getPosition(letter) // letter position in the alphabet which is a number
    const end = lowerCaseString.length - 1 === i
    
    if (position) {

      if (end) {
        result += position
      } else {
        result += `${position} `
      }
      
    }
  }
  
  return formatString(result)
}

const getPosition = (letter) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < alphabet.length; i++) {
    const position = i + 1;
    const letterInAlphabet = alphabet[i]
    if (letter === letterInAlphabet) {
      return position
    }  
  }
}

const formatString = (result) => {
  let final = ""
  for (let index = 0; index < result.length; index++) {
    const end = result.length - 1 === index
    const element = result[index];
    if (!(end && element === ' ')) {
        final += element;
    }
  } 
  return final
}


alphabetPosition("The sunset sets at twelve o' clock.") // => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" 
alphabetPosition("ThE.") // => "20 8 5" 
alphabetPosition("a b c") // => "1 2 3" 
alphabetPosition("zya") // => "26 25 1" 
alphabetPosition("abc. 1 2 3") // => "1 2 3" 


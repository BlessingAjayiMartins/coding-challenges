// take the string and run theat through a for loop starting from the last element to the begining 
// the first 4 itteration should return the substring , while the remainders return '#' as their representative


const maskify = (str) => {
  let result = '';
  let last4 = '';
  const pound = '#';
  let count = 0;

  if (str.length < 4) {
    return str
  }

  for (i = str.length -1; i > -1; i--) {
    const character = str[i]
    last4 += character
    count++

    if (count === 4) {
      result = repeat(pound, str.length - 4) + reverse(last4)
    }
  }

  return result
}

const reverse = (str) => {
  let result = ''
  for (i = str.length -1; i > -1; i--) {
    result += str[i]
  }
  return result
}
const repeat = (str, n) => {
  let result = ''
  for (i = 0; i < n ; i++) {
    result += str
  }
  return result
}


maskify("4556364607935616") // => "############5616"
maskify("64607935616") // => "#######5616"
maskify("1") // => "1"
maskify("") // => ""

repeat("s", 2) // => "ss"
repeat("as", 3) // => "asasas"
repeat("m", 5) // => "mmmmm"
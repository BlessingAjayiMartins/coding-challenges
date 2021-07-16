// Remove lower case vowels
// i would be looking to match my lower case vowels to the give string
// how would i do that?
// first create a function with an empty body
//  what are the lower case vowels

const shortcut = str => {
  var vowel = ['a','e','i','o','u'];
  result = [];
  var j = 0;
  for (i = 0; i < str.length; i++){
    do {
      j = j+1
    } 
      while (str[i] !== vowel[j])
      
      if (str[i] === vowel[j]){
        result += str[i]
      }
    
  } return result
}


console.log('blessing')
// The function should return a string that repeats the input string 'n' number of times
// if anything other than a string is not passed; return "Not a string"

var repeatIt = function(str, n) {
  var result = '';
    for (i = 0; i < n; i++){
      if (typeof str === 'string'){
        result += str
      }
      else 
       return 'Not a string'
    }
    return result
  }
  console.log(repeatIt('bless',3))
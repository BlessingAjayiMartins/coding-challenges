function decipherThis (str) {
  const storeString = str.split(' ');
  let firstLetter = [];
  let result = [];
  for (let i = 0; i < storeString.length; i++) {
    firstLetter += letterToCode(storeString[i]) + ' '
  }
  const halfway = firstLetter.split(' ');
  
  for (let i = 0; i < halfway.length; i++) {
    result += secondLastSwitch(halfway[i]) + ' '
  }
  return result.slice(0, -2)
  

  function secondLastSwitch (x) {
    let xArr;
    let result;
    let second;
    let last;
  
    if (x.length === 2 || x.length < 2) {
      xArr = x
    } else {
      xArr = x.split('')
      second = xArr[1];
      last = xArr[xArr.length -1];
      xArr.splice(1,1,last);
      xArr.splice(xArr.length -1, 1,second)
      xArr = xArr.join('');
    } 
    return xArr
  }

  function letterToCode (x) {
    let result;
    let holdNum = '';
    let holdStr = '';
    for (let i = 0; i < x.length; i++) {
      
      if (x[i] == Number(x[i])) {
        holdNum += x[i]
      } else {
          holdStr += x[i]
        }
      
    }
    result = String.fromCharCode(holdNum) + holdStr;
    return result
    
  }
}

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')) // 'Have a go at this and see how you do'
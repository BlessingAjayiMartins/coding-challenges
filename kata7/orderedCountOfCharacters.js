// var orderedCount = function (text) {
  
  

//   return [];
// }



const characterInText = (text) => {
  let array = []
  let count = 0;
  

  for (i = 0; i < text.length ; i++) {
    // let count = 0;
    if(array.indexOf(text[i]) === -1) {
      array[count] = text[i];
    
      count++
    }
  }
  
  return array
}

// const countChar = (characterInText, text) => {
//   let match = 0
//   for (i = 0; i < characterInText.length; i++) {
//     for (value in text) {
//       if (characterInText[i] === text) {
//         match++;
      
//       }
//     }
//   }
  // for (i = 0; i < characterInText.length; i++) {
  //   characterInText[i]
  //   for (j = 0; j < text.length; j++) {
  //     text[j]
  //   }
  // }
}


// console.log(countCharInText('blessing'))
console.log(characterInText('blessing'))

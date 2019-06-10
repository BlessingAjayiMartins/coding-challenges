function findMissingLetter(array){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (alphabet.indexOf(array[0]) != -1) {
     
    for(let i = 0; i < array.length; i++) {
      
      let a = alphabet.indexOf(array[i])
      if (a + 1 != alphabet.indexOf(array[i + 1])) {
         return alphabet[a+1]
      }
    }
  } else {
      for(let i = 0; i < array.length; i++) {
      
        let a = alphabet.toUpperCase().indexOf(array[i])
        if (a + 1 != alphabet.toUpperCase().indexOf(array[i + 1])) {
          return alphabet.toUpperCase()[a+1]
        }
      }
    }  
}
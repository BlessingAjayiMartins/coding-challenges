const cracklePop = () => {

  for(let i = 1; i < 101; i++) {
    const num = i
    if (num%3 === 0 && num%5 === 0) {
      console.log('CracklePop')
    } else if (num%3 === 0) {
      console.log('Crackle')
    } else if (num%5 === 0) {
      console.log('Pop')
    } else {
      console.log(num)
    }
  }
}

console.log(cracklePop())
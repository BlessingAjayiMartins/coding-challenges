function last(x){
  const words = x.split(' ');
  const rev = words.map(reversedWords => reversedWords.split('').reverse().join(''));
  const reversedAndSort = rev.sort(function(a,b) {
    if (a[0] > b[0]) {
      return 1;
    }
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      return 0;
    }
  })
  const backToNorm = reversedAndSort.map(x => x.split('').reverse().join(''))
  return backToNorm
}
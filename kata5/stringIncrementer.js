const incrementString = (string) => {
  const regex = /[0-9]/g
  const found = string.match(regex)
  let endOfFound
  let result
  let join
  if (!found) {
    result = string + '1'
  } else {
    endOfFound = found[found.length -1]*1
    if(!endOfFound && endOfFound === 0) {
      const num = endOfFound + 1
      result = string.slice(0, -1) + num.toString()
    } else if (endOfFound < 9) {
      const num = endOfFound + 1
      result = string.slice(0, -1) + num.toString()
    } else {
      join = found.join('')
      const newJoin = join * 1 + (1)
      result = string.slice(0, -join.length) + newJoin.toString()
    }
  } 
  return result
}

console.log(incrementString("foobar000")) // "foobar001");
console.log(incrementString("foo")) //, "foo1");
console.log(incrementString("foobar001")) //, "foobar002");
console.log(incrementString("foobar99")) //, "foobar100");
console.log(incrementString("foobar099")) //, "foobar100");
console.log(incrementString("")) //, "1");
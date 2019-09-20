const incrementString = (string) => {
  const regex = /[0-9]/g
  const found = string.match(regex)
  let result
  let join
  if (!found) {
    result = string + '1'
  } else {
    join = found.join('') * 1 + (1)
    join = join.toString().split('')
    const arr = Array(found.length).fill(0)
    for (let i = 0; i < join.length; i++) {
      arr.push(join[i])
      if (arr[0] === 0)
      arr.shift()
    }
    result = string.slice(0, -found.length) + arr.join('')
    result = result.toString()
  }
  return result
}
console.log(incrementString("foobar000")) // "foobar001");
console.log(incrementString("foo")) //, "foo1");
console.log(incrementString("foobar001")) //, "foobar002");
console.log(incrementString("foobar99")) //, "foobar100");
console.log(incrementString("foobar099")) //, "foobar100");
console.log(incrementString("")) //, "1");
console.log(incrementString("foobar00999"))// foobar01000
console.log(incrementString("foobar009")) // foobar010
console.log(incrementString("foobar999")) // foobar1000
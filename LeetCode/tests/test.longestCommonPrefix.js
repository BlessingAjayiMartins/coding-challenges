const longestCommonPrefix = require('../longestCommonPrefix')

test('flying, flower, floor to return fl', ()=> {
  expect(longestCommonPrefix('flower', 'flying', 'floor').toBe('fl'))
})
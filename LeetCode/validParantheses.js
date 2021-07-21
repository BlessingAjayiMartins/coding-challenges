var isValid = function(s) {
    
  let stack = []
  for (let a = 0; a < s.length; a++) {
      
      if (s[a] === '(') {
          stack.push(')')
      } else if (s[a] === '{') {
          stack.push('}')
      } else if (s[a] === '[') {
          stack.push(']')
      } else if (s[a] === null || stack.pop() != s[a]) {
          return false
      }
  }
  if (stack.length === 0) {
      return true
  }
  return false 
};
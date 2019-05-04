// function removeChar(str) {
//   let result = '';
//   for(i = 1; i < str.length-1; i++){
//     result += str[i]
//   }
//     return result
// };

// function removeChar(str) {
//   let result = [];
//   for(i = 1; i < str.length-1; i++){
//     result.push(str[i])
//   }
//     return result.join('')
// };

// function removeChar(str) {
//   let result = [];
//   for(i = 0; i < str.length; i++){
//     if (i !== 0 && i !== str.length - 1) {
//       result.push(str[i])
//     }
//   }
//     return result.join('')
// };

const removeChar = (str) => str.slice(1, str.length - 1)

// const name = "Blessing";
// L = name[1]
console.log(removeChar('BlessingMartins'))
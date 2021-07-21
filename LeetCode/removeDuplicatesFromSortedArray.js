var removeDuplicates = function(nums) {
    
  let a = 0
  let b = 1
  while (b < nums.length) {
      if (nums[b] === nums[a]) {
          nums.splice(a, 1)  
      } else {
          a++
          b++
      }
      
  }
  
  return nums.length 
};
var twoSum = function(nums, target) {
  const result = []
  const map = {}
  
  for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = i
  }
  for ( let a = 0; a < nums.length; a++) {
      let looking = target - nums[a]
      if (map[looking] != undefined && map[looking] != a) {
          result.push(a, map[looking])
          break
      }
  }
  return result
};
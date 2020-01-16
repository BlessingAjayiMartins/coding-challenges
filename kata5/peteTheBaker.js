// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. Can you help him to find out, 
// how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the 
// available ingredients (also an object) and returns the maximum 
// number of cakes Pete can bake (integer). For simplicity there are no 
// units for the amounts (e.g. 1 lb of flour or 200 g of sugar are 
// simply 1 or 200). Ingredients that are not present in the objects, 
// can be considered as 0.


const cakes = (recipe, available) => {
  let arr = []
  let recipeKey = Object.keys(recipe)
  let availableKey = Object.keys(available)

  if(availableKey.length === 0) {
    return 0
  }


  for ( let a = 0; a < recipeKey.length; a++) {
    for (let b = 0; b < availableKey.length; b++) {
      if (availableKey.indexOf(recipeKey[a]) === -1) {
        return 0
      } else if (recipeKey[a] === availableKey[b]) {
        arr.push(available[availableKey[b]]/recipe[recipeKey[a]])
      }
    }
  }
  // console.log(arr)
  return Math.floor(Math.min(...arr))
}

cakes({"oil":57,"apples":87,"sugar":78}, {"chocolate":7200,"crumbles":6900,"milk":5900,"pears":1200,"cream":3600,"flour":1500,"cocoa":1400,"nuts":8000,"sugar":9400,"eggs":1400,"oil":5000,"butter":2000,"apples":300}) // Expect 3
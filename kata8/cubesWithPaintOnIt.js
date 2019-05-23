var countSquares = function(cuts){
  if (cuts === 0) {
    return 1
  } else {
      return 6 * cuts * cuts + 2
    }
}
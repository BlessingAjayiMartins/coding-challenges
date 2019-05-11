function unluckyDays(year){
  var count = 0 
  for (month = 0; month < 12; month++){
    const uhoh = new Date(year, month, 13)
    if (uhoh.getDay() === 5){
    count++
    }
    
  }
  return count
}
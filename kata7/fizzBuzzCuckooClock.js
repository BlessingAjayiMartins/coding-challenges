function fizzBuzzCuckooClock(time) {
  const hour = time.split(':')[0]*1
  const min = time.split(':')[1]
  const fizz = 'Fizz'
  const buzz = 'Buzz'
  const tick = 'tick'
  const cuckoo = 'Cuckoo '
  const cuckooX = hour => hour > 12?  cuckoo.repeat(hour - 12) :  cuckoo.repeat(hour)
  if (hour === 00 && min === '00'){
    return cuckoo.repeat(12).trimRight()
  }
  else
    if(min === '00'){
      return cuckooX(hour).trimRight()
    }
    else
      if(min === '30'){
        return cuckoo.trimRight()
      }
      else
        if (min % 3 === 0 && min % 5 === 0){
          return fizz + ' ' + buzz
        }
        else
          if (min % 3 === 0){
            return fizz
          }
          else
            if (min % 5 === 0){
              return buzz
            }
            else
              if (min % 5 !== 0 && min % 3 !== 0){
                return tick
            }
}

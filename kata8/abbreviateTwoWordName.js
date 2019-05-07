function abbrevName(name){
  var first = name.charAt(0)
  var last = ''
  for (i = 0; i < name.length; i++){
    if (name[i] === ' '){
      i++; last += name[i]
    }
  }
     return first.toUpperCase() + '.' + last.toUpperCase()
  }

  console.log(abbrevName('Firstname Lastname'))
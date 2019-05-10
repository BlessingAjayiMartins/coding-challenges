function nbYear(p0, percent, aug, p) {
  for (x = 0; p0 < p; x++){
    p0 += ((p0*(percent/100)) + aug) 
  }
  return x
}
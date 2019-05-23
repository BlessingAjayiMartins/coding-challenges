const points = games =>
  games.reduce((total, result) => {
    const [x, y] = result.split(':').map(Number)
    if (x > y) return total + 3
    if (x < y) return total
    return total + 1
  }, 0)

  
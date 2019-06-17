const menStillStanding = (players) => {
  const playerTeamToggle = { A: 'A', B: 'B'}
  const hashMap = {}
  let A = 11;
  let B = 11;
  
  for (let a = 0; a < players.length; a++) {
    if (A === 6 || B === 6) {
      return [A, B];
      break;
    }
    const player = players[a];
    const playerName = player.split('');
    playerName.pop()
    const uniPlayer = playerName.join('')
    const playerTeam = player[0];
    const refAction = player[player.length -1];

    const updatePlayerActions = (refA, x) => {
      
      if (playerTeam === playerTeamToggle[x]) {
        if (hashMap[uniPlayer] === undefined) {
          if (refA === 'R') {
            hashMap[uniPlayer] = 1;
            playerTeamToggle[x]  === 'A' ? A-- : B--
          } else if (refA === 'Y') {
            hashMap[uniPlayer] = 0.5;
          }
        } else if (hashMap[uniPlayer] < 1) {
          if (refA === 'Y' || refA === 'R') {
            playerTeamToggle[x]  === 'A' ? A-- : B--
            hashMap[uniPlayer] = 1
          }
        }
      }
    }

    updatePlayerActions(refAction, playerTeam)
  }

  return [A, B];
}

// console.log(menStillStanding([ 'B2Y','A7R','A10Y','A7Y','A7Y','B8Y','A1Y','B4Y','A1Y','B3Y','B11R' ])) // [9 ,10]
// console.log(menStillStanding([])) // [11,11]
// console.log(menStillStanding(["A4Y", "A4Y"])) // [10,11]
// console.log(menStillStanding(["A4Y", "A4R"])) // [10,11]
// console.log(menStillStanding(["A4Y", "A5R", "B5R", "A4Y", "B6Y"]))// [9,10]
// console.log(menStillStanding(["A4R", "A4R", "A4R"])) // [10,11]
// console.log(menStillStanding(["A4R", "A6R", "A8R", "A10R", "A11R"])) // [6,11]
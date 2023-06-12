//Q4. Tile Teamwork Tactics

// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece
// onto the same tile as another player's piece, both of you earn a bonus.
// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's
//position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

function bonus(me, friend) {
  const points = 6;
  const difference = friend - me;

  for (let point = 1; point <= 6; point++) {
    if (point === difference) {
      return true;
    }
  }
  return false;
}

console.log("Possible bonus : ", bonus(5, 3));

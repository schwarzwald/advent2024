const replace = stone => {
  if (stone == 0) {
    return [1];
  }
  let digits = Math.floor(Math.log10(stone)) + 1;
  if (digits % 2 == 0) {
    let order = 10 ** (digits / 2);
    return [Math.floor(stone / order), Math.floor(stone % order)];
  }
  return [stone * 2024];
}

module.exports = input => {
  let stones = input.split(' ').map(Number).reduce((m, v) => m.set(v, (m.get(v) || 0) + 1), new Map());

  for (let i = 0; i < 75; i++) {
    let newStones = new Map();
    for (let stone of stones.keys()) {
      for (let s of replace(stone)) {
        newStones.set(s, (newStones.get(s) || 0) + stones.get(stone));
      }
    }
    stones = newStones;
  }
  return [...stones.values()].reduce((a, b) => a + b);
}

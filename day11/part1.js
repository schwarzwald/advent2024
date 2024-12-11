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

const replaceAll = stones => {
  let newStones = [];
  for (let stone of stones) {
    newStones.push(...replace(stone));
  }
  return newStones;
}


module.exports = input => {
  let stones = input.split(' ').map(Number);
  let newStones = [...stones];
  for (let i = 0; i < 25; i++) {
    newStones = replaceAll(newStones);
  }
  return newStones.length;
}

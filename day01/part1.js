module.exports = input => {
  const lists = input.split(/\r?\n/)
    .map(r => r.split(/\s+/))
    .reduce(([left, right], [a, b]) => [[...left, +a], [...right, +b]], [[], []])
    .map(list => list.sort((a, b) => a - b));

  let result = 0;
  for (let i = 0; i < lists[0].length; i++) {
    result += Math.abs(lists[0][i] - lists[1][i]);
  }

  return result;
}

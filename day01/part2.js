module.exports = input => {
  const data = input.split(/\r?\n/)
    .map(r => r.split(/\s+/))
    .reduce(([left, right], [a, b]) => [[...left, +a], right.set(+b, (right.get(+b) || 0) + 1)], [[], new Map()])

  let result = 0;
  for (let i = 0; i < data[0].length; i++) {
    const number = data[0][i];
    result += number * (data[1].get(number) || 0);
  }

  return result;
}

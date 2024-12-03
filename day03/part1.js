module.exports = input =>
  input.match(/mul\(\d{1,3},\d{1,3}\)/g)
    .map(r => /mul\((\d+),(\d+)\)/.exec(r))
    .map(([_, a, b]) => a * b)
    .reduce((a, b) => a + b);

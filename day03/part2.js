module.exports = input => {
  let matched = input.match(/(do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\))/g);

  let enabled = true;
  let sum = 0;

  for (let match of matched) {
    if (match.startsWith('do()')) {
      enabled = true;
    } else if (match.startsWith('don\'t()')) {
      enabled = false;
    } else if (enabled) {
      let [_, a, b] = /mul\((\d+),(\d+)\)/.exec(match);
      sum += a * b;
    }
  }
  return sum;
}

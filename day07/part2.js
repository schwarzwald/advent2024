const check = (result, operands) => {
  let stack = [[operands[0], 1]];
  while (stack.length) {
    let [a, i] = stack.pop();
    b = operands[i];
    let results = [a * b, a + b, a * (10 ** (1 + Math.log10(b) | 0)) + b];

    for (let r of results) {
      if (i == operands.length - 1) {
        if (r == result) {
          return true;
        }
      } else if (i < operands.length - 1) {
        if (r <= result) {
          stack.push([r, i + 1]);
        }
      }
    }
  }

  return false;
}

module.exports = input => input.split(/\r?\n/)
  .map(r => r.split(': '))
  .map(([r, o]) => [(+r), o.split(' ').map(Number)])
  .filter(r => check(...r))
  .map(r => r[0])
  .reduce((a, b) => a + b);
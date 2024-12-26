module.exports = input => {
  let groups = input.split(/\r?\n\r?\n/);
  let program = groups[1].split(': ')[1].split(',').map(Number);

  let patterns = new Set();
  patterns.add(['.....xx000', '101']);
  patterns.add(['....xxx001', '100']);
  patterns.add(['.......010', '111']);
  patterns.add(['......x011', '110']);
  patterns.add(['.xxx...100', '001']);
  patterns.add(['xxx....101', '000']);
  patterns.add(['...xxx.110', '011']);
  patterns.add(['..xxx..111', '010']);

  let numbers = new Map();
  for (let [pattern, xor] of patterns) {
    let start = pattern.indexOf('x');
    let end = pattern.lastIndexOf('x');

    if (start == -1) {
      let number = parseInt(pattern.substring(pattern.length - 3), 2) ^ parseInt(xor, 2);
      if (!numbers.has(number)) {
        numbers.set(number, []);
      }
      numbers.get(number).push(pattern);
    } else {
      let length = end - start + 1;
      for (let i = 0; i < 2 ** length; i++) {
        let n = parseInt(i.toString(2).padStart(length, '0') + pattern.substr(pattern.lastIndexOf('x') + 1, 3 - length), 2)
        let number = n ^ parseInt(xor, 2);
        let newPattern = pattern.replace(new RegExp('x{' + length + '}'), i.toString(2).padStart(length, '0'));
        if (!numbers.has(number)) {
          numbers.set(number, []);
        }
        numbers.get(number).push(newPattern);
      }
    }
  }

  const toBigInt = string => {
    return string.split('').reverse().map(BigInt).reduce((result, current, i) => result += (2n ** BigInt(i)) * current);
  }

  const match = (string, pattern, position) => {
    for (let i = 0; i < pattern.length; i++) {
      let pc = pattern[pattern.length - i - 1];
      let pos = string.length - 1 - position - i;
      let sc = pos >= 0 ? string[pos] : '.';

      if (pc != '.' && sc != '.' && pc != sc) {
        return false;
      }
    }

    return true;
  }

  const replace = (string, pattern, position) => {
    string = string.padStart(position + pattern.length, '.');

    for (let i = 0; i < pattern.length; i++) {
      let pc = pattern[pattern.length - i - 1];
      let pos = string.length - 1 - position - i;
      if (pc != '.') {
        string = string.substring(0, pos) + pc + string.substring(pos + 1);
      }
    }
    return string;
  }

  let min = null;
  let queue = [['', 0]];
  while (queue.length) {
    let [result, position] = queue.pop();
    if (position >= program.length) {
      let res = toBigInt(result.replaceAll('.', '0'))
      if (min == null || res < min) {
        min = res;
      }
      continue;
    }
    let expected = program[position];

    for (let pattern of numbers.get(expected)) {
      if (match(result, pattern, position * 3)) {
        queue.push([replace(result, pattern, position * 3), position + 1]);
      }
    }
  }

  return min;
}

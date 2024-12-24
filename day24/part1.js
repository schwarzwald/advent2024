module.exports = input => {
  let outputs = new Map();
  let groups = input.split(/\r?\n\r?\n/);

  groups[0].split(/\r?\n/)
    .map(r => r.split(': '))
    .forEach(([o, v]) => outputs.set(o, +v));

  groups[1].split(/\r?\n/)
    .map(r => r.match(/(\w+) (\w+) (\w+) -> (\w+)/))
    .forEach(([, a, x, b, o]) => outputs.set(o, [a, x, b]));

  const eval = key => {
    let val = outputs.get(key);
    if (!isNaN(val)) {
      return val;
    }

    let a = eval(val[0]);
    let b = eval(val[2]);

    switch (val[1]) {
      case 'OR': return a | b;
      case 'AND': return a & b;
      case 'XOR': return a ^ b;
    }
  }

  let result = [...outputs.keys()].filter(k => k.startsWith('z'))
    .sort()
    .reverse()
    .map(eval)
    .join('');

  return parseInt(result, 2);
}

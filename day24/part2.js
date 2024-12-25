module.exports = input => {
  let outputs = new Map();
  let groups = input.split(/\r?\n\r?\n/);

  groups[0].split(/\r?\n/)
    .map(r => r.split(': '))
    .forEach(([o, v]) => outputs.set(o, +v));

  groups[1].split(/\r?\n/)
    .map(r => r.match(/(\w+) (\w+) (\w+) -> (\w+)/))
    .forEach(([, a, x, b, o]) => outputs.set(o, [a, x, b]));

  const cache = new Map();
  const eval = (key, stack = []) => {
    if (cache.has(key)) {
      return cache.get(key);
    }

    let val = outputs.get(key);
    if (!isNaN(val)) {
      cache.set(key, val);
      return val;
    }

    if (stack.includes(key)) {
      return null;
    }

    let a = eval(val[0], [...stack, key]);
    let b = eval(val[2], [...stack, key]);


    switch (val[1]) {
      case 'OR': val = a | b; break;
      case 'AND': val = a & b; break;
      case 'XOR': val = a ^ b; break;
    }
    cache.set(key, val);
    return val;
  }

  const calc = (a, b) => {
    cache.clear();
    for (let i = 0; i <= 44; i++) {
      outputs.set(`x${i < 10 ? '0' + i : i}`, 0);
      outputs.set(`y${i < 10 ? '0' + i : i}`, 0);
    }

    let a2 = [...a.toString(2)].reverse();
    let b2 = [...b.toString(2)].reverse();

    for (let i = 0; i < a2.length; i++) {
      outputs.set(`x${i < 10 ? '0' + i : i}`, +a2[i]);
    }

    for (let i = 0; i < b2.length; i++) {
      outputs.set(`y${i < 10 ? '0' + i : i}`, +b2[i]);
    }

    let result = [...outputs.keys()].filter(k => k.startsWith('z'))
      .sort()
      .map(r => eval(r))
      .reverse()
      .join('');

    return parseInt(result, 2);
  }

  const test = () => {
    let count = 0;
    for (let i = 0; i <= 44; i++) {
      let a = 2 ** i;
      if (calc(0, a) != a || calc(a, 0) != a || calc(a, a) != a + a) {
        count++;
        console.log(i);
      }
    }
    return count;
  }

  const swap = (x, y) => {
    let xo = outputs.get(x);
    let yo = outputs.get(y);

    if (xo.includes(y) || yo.includes(x)) {
      return;
    }

    outputs.set(x, yo);
    outputs.set(y, xo);
  }

  swap('pfw', 'z39');
  swap('dqr', 'z33');
  swap('shh', 'z21');
  swap('vgs', 'dtk');
  console.log(test());
  return 0;
}

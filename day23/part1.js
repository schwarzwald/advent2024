module.exports = input => {
  let connections = input.split(/\r?\n/)
    .map(r => r.split('-'));

  let map = new Map();

  for (let [a, b] of connections) {
    let setA = map.get(a) || new Set();
    let setB = map.get(b) || new Set();
    setA.add(b);
    setB.add(a);
    map.set(a, setA);
    map.set(b, setB);
  }

  let tripples = [];

  for (let a of map.keys()) {
    for (let b of map.get(a)) {
      for (let c of map.get(a)) {
        if (b == c) {
          continue;
        }

        if (map.get(c).has(b)) {
          tripples.push([a, b, c]);
        }
      }
    }
  }

  return tripples.filter(c => c.some(x => x.startsWith('t'))).length / 6;
  ;
}

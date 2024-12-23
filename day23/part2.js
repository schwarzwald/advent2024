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

  let max = new Set();

  const intersect = (s1, s2) => {
    let s3 = new Set();
    for (let a of s1) {
      if (s2.has(a)) {
        s3.add(a);
      }
    }
    return s3;
  }

  const clique = (r, p, x) => {
    if (p.size == 0 && x.size == 0) {
      if (r.size > max.size) {
        max = r;
      }
    }

    for (v of p) {
      clique(
        new Set(r).add(v),
        intersect(p, map.get(v)),
        intersect(x, map.get(v)));

      x.add(v);
      p.delete(v);
    }
  }

  clique(new Set(), new Set(map.keys()), new Set());

  return [...max].sort().join(',');
}

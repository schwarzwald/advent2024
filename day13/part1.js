const det = (x1, x2, y1, y2) => x1 * y2 - x2 * y1;

module.exports = input => {
  let groups = input.split(/\r?\n\r?\n/)
    .map(r => r.split(/\r?\n/));

  let tokens = 0;

  for (let [r1, r2, r3] of groups) {
    let [x1, x2] = r1.match(/Button A: X([+-]?\d+), Y([+-]?\d+)/).slice(1).map(Number);
    let [y1, y2] = r2.match(/Button B: X([+-]?\d+), Y([+-]?\d+)/).slice(1).map(Number);
    let [z1, z2] = r3.match(/Prize: X=(\d+), Y=(\d+)/).slice(1).map(Number);

    let d = det(x1, x2, y1, y2);
    let d1 = det(z1, z2, y1, y2);
    let d2 = det(x1, x2, z1, z2);

    if (d1 % d == 0 && d2 % d == 0) {
      let a = d1 / d;
      let b = d2 / d;

      tokens += 3 * a + b;
    }
  }
  return tokens;
}

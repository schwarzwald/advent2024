const validate = (update, [first, second]) => {
  let i1 = update.indexOf(first);
  let i2 = update.indexOf(second);

  return i1 == -1 || i2 == -1 || i2 > i1;
}

module.exports = input => {
  let groups = input.split(/\r?\n\r?\n/)
    .map(r => r.split(/\r?\n/));

  let rules = groups[0].map(x => x.split('|').map(Number));
  let updates = groups[1].map(x => x.split(',').map(Number));

  return updates.filter(u => rules.every(r => validate(u, r)))
    .map(u => u[Math.floor(u.length / 2)])
    .reduce((a, b) => a + b);
}

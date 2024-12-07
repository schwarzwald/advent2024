const validate = (update, [first, second]) => {
  let i1 = update.indexOf(first);
  let i2 = update.indexOf(second);

  return i1 == -1 || i2 == -1 || i2 > i1;
}

const fix = (update, rules) => {
  let fixed = [];

  for (let page of update) {
    let before = rules.filter(r => r[0] == page).map(r => r[1]);
    let after = rules.filter(r => r[1] == page).map(r => r[0]);

    let min = Math.min(...before.map(p => fixed.indexOf(p)).filter(p => p >= 0), fixed.length);
    let max = Math.max(...after.map(p => fixed.indexOf(p)).filter(p => p >= 0), -1);
    fixed.splice(min < fixed.length ? min : max + 1, 0, page);
  }

  return fixed;
}

module.exports = input => {
  let groups = input.split(/\r?\n\r?\n/)
    .map(r => r.split(/\r?\n/));

  let rules = groups[0].map(x => x.split('|').map(Number));
  let updates = groups[1].map(x => x.split(',').map(Number));

  let result = 0;
  for (let update of updates) {
    if (!rules.every(r => validate(update, r))) {
      result += fix(update, rules)[Math.floor(update.length / 2)];
    }
  }

  return result;
}

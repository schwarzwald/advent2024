const safe = list => {
  let dir = 0;

  for (let i = 0; i < list.length - 1; i++) {
    let diff = list[i] - list[i + 1];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    let norm = diff / Math.abs(diff);

    if (dir && dir != norm) {
      return false;
    }

    dir = norm;
  }

  return true;
}

module.exports = input => input.split(/\r?\n/)
  .map(r => r.split(' ').map(Number))
  .filter(safe)
  .length;

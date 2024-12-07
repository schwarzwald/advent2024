module.exports = input => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split(''));

  let count = 0;

  for (let y = 1; y < grid.length - 1; y++) {
    for (let x = 1; x < grid[0].length - 1; x++) {
      let w = ['', ''];

      for (let i = -1; i <= 1; i++) {
        w[0] += grid[y + i][x + i]
        w[1] += grid[y + i][x - i];
      }

      if (w.filter(x => x == 'MAS' || x == 'SAM').length == 2) {
        count++;
      }
    }
  }

  return count;
}

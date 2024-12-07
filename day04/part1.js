module.exports = input => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split(''));

  let count = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      let w = ['', '', '', ''];

      for (let i = 0; i < 4; i++) {
        if (x + i < grid[0].length) {
          w[0] += grid[y][x + i];
        }
        if (y + i < grid.length) {
          w[1] += grid[y + i][x];
        }
        if (y + i < grid.length && x + i < grid[0].length) {
          w[2] += grid[y + i][x + i]
        }
        if (y - i >= 0 && x - i >= 0) {
          w[3] += grid[y - i][x - i];
        }
      }

      count += w.filter(x => x == 'XMAS' || x == 'SAMX').length;
    }
  }

  return count;
}

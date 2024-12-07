module.exports = input => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split(''));

  let px;
  let py;
  let [dx, dy] = [0, -1];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] == '^') {
        px = x;
        py = y;
      }
    }
  }

  let visited = new Set();
  visited.add(`${px}#${py}`);
  while (px + dx >= 0 && px + dx < grid[0].length && py + dy >= 0 && py + dy < grid.length) {
    if (grid[py + dy][px + dx] == '#') {
      [dx, dy] = [-dy, dx];
    }
    px += dx;
    py += dy;
    visited.add(`${px}#${py}`);
  }

  return visited.size;
}

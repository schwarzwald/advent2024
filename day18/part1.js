module.exports = (input, size = 71, limit = 1024) => {
  let positions = input.split(/\r?\n/)
    .map(r => r.split(',').map(Number))
    .slice(0, limit);

  let grid = [];
  for (let y = 0; y < size; y++) {
    grid.push([]);
    for (let x = 0; x < size; x++) {
      grid[y].push('.');
    }
  }

  for (let [x, y] of positions) {
    grid[y][x] = '#';
  }

  let queue = [[0, 0, 0]];
  const id = (x, y) => `${x}#${y}`;
  let visited = new Set();

  while (queue.length) {
    let [px, py, d] = queue.shift();

    if (visited.has(id(px, py))) {
      continue;
    }

    if (px < 0 || px >= size || py < 0 || py >= size) {
      continue;
    }

    if (grid[py][px] == '#') {
      continue;
    }

    if (px == size - 1 && py == size - 1) {
      return d;
    }

    visited.add(id(px, py));

    queue.push([px + 1, py, d + 1], [px - 1, py, d + 1], [px, py + 1, d + 1], [px, py - 1, d + 1])
  }
}

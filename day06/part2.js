const id = (px, py, dx, dy) => `${px}#${py}#${dx}#${dy}`;

const isInCycle = (grid, [px, py]) => {
  let visited = new Set();
  let [dx, dy] = [0, -1];

  visited.add(id(px, py, dx, dy));
  while (px + dx >= 0 && px + dx < grid[0].length && py + dy >= 0 && py + dy < grid.length) {
    if (grid[py + dy][px + dx] == '#') {
      [dx, dy] = [-dy, dx];
    } else {
      px += dx;
      py += dy;

      if (visited.has(id(px, py, dx, dy))) {
        return true;
      }

      visited.add(id(px, py, dx, dy));
    }
  }

  return false;
}

module.exports = input => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split(''));

  let ox;
  let oy;
  let [dx, dy] = [0, -1];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] == '^') {
        ox = x;
        oy = y;
      }
    }
  }

  let path = [];
  let px = ox;
  let py = oy;
  let positions = new Set();

  while (px + dx >= 0 && px + dx < grid[0].length && py + dy >= 0 && py + dy < grid.length) {
    if (grid[py + dy][px + dx] == '#') {
      [dx, dy] = [-dy, dx];
    }
    px += dx;
    py += dy;
    path.push([px, py]);
  }

  for (let [cx, cy] of path) {
    if (cx == ox && cy == oy) {
      continue;
    }

    if (positions.has(id(cx, cy))) {
      continue;
    }

    let copy = grid.map(r => r.slice());
    copy[cy][cx] = '#';
    if (isInCycle(copy, [ox, oy])) {
      positions.add(id(cx, cy));
    }
  }

  return positions.size;
}

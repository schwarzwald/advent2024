const instr = new Map()
  .set('^', [0, -1])
  .set('v', [0, 1])
  .set('>', [1, 0])
  .set('<', [-1, 0]);

const canMove = (grid, px, py, [dx, dy]) => {
  if (grid[py][px] == '.') {
    return true;
  }

  if (grid[py][px] == '#') {
    return false;
  }

  if (dy) {
    if (grid[py][px] == '[') {
      return canMove(grid, px + dx, py + dy, [dx, dy]) && canMove(grid, px + dx + 1, py + dy, [dx, dy]);
    }
    if (grid[py][px] == ']') {
      return canMove(grid, px + dx, py + dy, [dx, dy]) && canMove(grid, px + dx - 1, py + dy, [dx, dy]);
    }
  }

  return canMove(grid, px + dx, py + dy, [dx, dy]);
}

const move = (grid, px, py, [dx, dy]) => {
  if (!canMove(grid, px, py, [dx, dy])) {
    return false;
  }

  if (grid[py][px] == '.') {
    return true;
  }

  if (dy) {
    let pair = 0;
    if (grid[py][px] == '[') {
      pair = 1;
    } else if (grid[py][px] == ']') {
      pair = -1;
    }

    if (pair) {
      move(grid, px + dx, py + dy, [dx, dy]);
      move(grid, px + dx + pair, py + dy, [dx, dy]);
      grid[py + dy][px + dx] = grid[py][px];
      grid[py][px] = '.';

      grid[py + dy][px + dx + pair] = grid[py][px + pair];
      grid[py][px + pair] = '.';
      return true;
    }
  }

  move(grid, px + dx, py + dy, [dx, dy]);
  grid[py + dy][px + dx] = grid[py][px];
  grid[py][px] = '.';
  return true;
}

module.exports = input => {
  let [grid, instructions] = input.split(/\r?\n\r?\n/);
  grid = grid.split(/\r?\n/)
    .map(r => r.split('').map(c => {
      switch (c) {
        case '#': return '##';
        case 'O': return '[]';
        case '.': return '..';
        case '@': return '@.';
      }
    }).join('').split(''));

  instructions = instructions.split(/\r?\n/).join('').split('');

  let px = 0;
  let py = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] == '@') {
        px = x;
        py = y;
      }
    }
  }

  for (let i of instructions) {
    let [dx, dy] = instr.get(i);
    if (move(grid, px, py, [dx, dy])) {
      px += dx;
      py += dy;
    }
  }

  return grid.map((r, y) => r.map((c, x) => c == '[' ? 100 * y + x : 0).reduce((a, b) => a + b))
    .reduce((a, b) => a + b);
}

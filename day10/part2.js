module.exports = input => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split('').map(Number));

  let result = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] == 0) {
        let queue = [{ x, y }];
        while (queue.length) {
          let p = queue.shift();
          let h = grid[p.y][p.x];
          if (h == 9) {
            result++;
            continue;
          }

          for (let [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            if (p.x + dx >= 0 && p.x + dx < grid[0].length
              && p.y + dy >= 0 && p.y + dy < grid.length
              && grid[p.y + dy][p.x + dx] == h + 1) {
              queue.push({ x: p.x + dx, y: p.y + dy });
            }
          }
        }
      }
    }
  }

  return result;
}

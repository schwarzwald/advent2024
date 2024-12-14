module.exports = (input, width = 101, height = 103) => {
  let lines = input.split(/\r?\n/)
    .map(r => r.match(/p=(\d+),(\d+) v=(-?\d+),(-?\d+)/)
      .slice(1)
      .map(Number));

  let i = 0;
  while (true) {
    let grid = new Array(height);
    for (let y = 0; y < height; y++) {
      let row = new Array(width);
      row.fill('.');
      grid[y] = row;
    }

    for (let [px, py, vx, vy] of lines) {
      grid[(py + (vy + height) * i) % height][(px + (vx + width) * i) % width] = '#';
    }

    let found = true;
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length - 10; x++) {
        found = true;
        for (let dx = 0; dx < 10; dx++) {
          if (grid[y][x + dx] != '#') {
            found = false;
            break;
          }
        }
        if (found) {
          return i;
        }
      }
    }
    i++;
  }
}

module.exports = (input, threshold = 100) => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split(''));

  let sx = 0;
  let sy = 0;
  let length = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] == 'S') {
        sx = x;
        sy = y;
      } else if (grid[y][x] == 'E' || grid[y][x] == '.') {
        length++;
      }
    }
  }

  let map = new Map();
  let queue = [[sx, sy, 0]];
  while (queue.length) {
    let [cx, cy, clength] = queue.shift();
    let id = `${cx}#${cy}`;
    if (map.has(id)) {
      continue;
    }
    map.set(id, [cx, cy, clength]);

    for (let [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      if (grid[cy + dy][cx + dx] != '#') {
        queue.push([cx + dx, cy + dy, clength + 1]);
      }
    }
  }

  let count = 0;
  for (let [cx, cy, clength] of map.values()) {
    for (let [dx, dy, dlength] of map.values()) {
      let d = Math.abs(cx - dx) + Math.abs(cy - dy);
      if (d <= 20 && dlength - (clength + d) >= threshold) {
        count++;
      }
    }
  }
  return count;
}

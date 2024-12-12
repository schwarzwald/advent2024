const id = (x, y) => `${x}#${y}`;

module.exports = input => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split(''));

  let regions = [];
  let visited = new Set();

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      let position = id(x, y);
      if (visited.has(position)) {
        continue;
      }

      let region = { type: grid[y][x], positions: [] };
      let stack = [[x, y]];
      regions.push(region);

      while (stack.length) {
        let [cx, cy] = stack.pop();
        let currentPosition = id(cx, cy);

        if (visited.has(currentPosition) || grid[cy][cx] != region.type) {
          continue;
        }

        visited.add(currentPosition);
        region.positions.push([cx, cy]);

        for (let [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
          if (cx + dx >= 0 && cx + dx < grid[0].length && cy + dy >= 0 && cy + dy < grid.length) {
            stack.push([cx + dx, cy + dy]);
          }
        }
      }
    }
  }

  let price = 0;

  for (let { type, positions } of regions) {
    for (let [x, y] of positions) {
      let perimeter = 0;
      for (let [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
        if (x + dx < 0 || x + dx >= grid[0].length || y + dy < 0 || y + dy >= grid.length || grid[y + dy][x + dx] != type) {
          perimeter++;
        }
      }
      price += perimeter * positions.length;
    }
  }
  return price;
}

const id = (x, y) => `${x}#${y}`;
const id2 = (x, y, dx, dy) => `${x}#${y}#${dx}#${dy}`;

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


  const isDifferent = (x, y, type) => x < 0 || x >= grid[0].length || y < 0 || y >= grid.length || grid[y][x] != type;
  for (let { type, positions } of regions) {
    let visitedSides = new Set();
    let sides = [];
    for (let [x, y] of positions) {
      let side = [];

      const add = s => {
        if (!visitedSides.has(s)) {
          side.push(s);
          visitedSides.add(s);
        }
      }

      for (let dx of [1, -1]) {
        if (isDifferent(x + dx, y, type)) {
          let py = y;
          add(id2(x, y, dx, 0));

          for (let dy of [1, -1]) {
            py = y;

            while (!isDifferent(x, py + dy, type) && isDifferent(x + dx, py + dy, type)) {
              py += dy;;
              add(id2(x, py, dx, 0));
            }
          }

          visitedSides.add(...side);
          sides.push(side);
          side = [];
        }
      }

      for (let dy of [1, -1]) {
        if (isDifferent(x, y + dy, type)) {
          add(id2(x, y, 0, dy));

          for (let dx of [1, -1]) {
            let px = x;

            while (!isDifferent(px + dx, y, type) && isDifferent(px + dx, y + dy, type)) {
              px += dx;;
              add(id2(px, y, 0, dy));
            }
          }

          visitedSides.add(...side);
          sides.push(side);
          side = [];
        }
      }
    }

    price += sides.filter(c => c.length).length * positions.length;
  }
  return price;
}

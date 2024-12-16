module.exports = input => {
  let maze = input.split(/\r?\n/)
    .map(r => r.split(''));

  let sx = 0;
  let sy = 0;
  let ex = 0;
  let ey = 0;

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[0].length; x++) {
      if (maze[y][x] == 'S') {
        sx = x;
        sy = y;
      } else if (maze[y][x] == 'E') {
        ex = x;
        ey = y;
      }
    }
  }

  let map = new Map();
  const id = (x, y, dx, dy) => `${x}#${y}#${dx}#${dy}`;
  const guess = (x1, y1, x2, y2) => Math.abs(x2 - x1) + Math.abs(y2 - y1) + (y2 - y1 && x2 - x1 ? 1000 : 0);

  let queue = [[sx, sy, 1, 0, 0, []]];
  let minScore = Number.MAX_SAFE_INTEGER;
  let paths = [];

  while (queue.length) {
    let [x, y, dx, dy, score, path] = queue.shift();
    let i = id(x, y, dx, dy);
    if (score > (map.get(i) || Number.MAX_SAFE_INTEGER)) {
      continue;
    }
    map.set(i, score);

    if (score + guess(x, y, ex, ey) > minScore) {
      continue;
    }

    if (maze[y][x] == 'E') {
      if (score < minScore) {
        paths = [];
        minScore = score;
      }

      paths.push(path);
      continue;
    }

    if (maze[y][x] == '#') {
      continue;
    }

    let newPath = [...path, [x, y]];
    queue.push([x + dx, y + dy, dx, dy, score + 1, newPath]);
    queue.push([x - dy, y + dx, -dy, dx, score + 1001, newPath]);
    queue.push([x + dy, y - dx, dy, -dx, score + 1001, newPath]);
    queue.push([x - dx, y - dy, -dx, -dy, score + 2001, newPath]);
  }

  let flat = new Set(paths.flatMap(e => e).map(p => id(...p)));

  return flat.size + 1;
}

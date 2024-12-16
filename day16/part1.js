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

  let queue = [[sx, sy, 1, 0, 0]];
  let minScore = Number.MAX_SAFE_INTEGER;

  while (queue.length) {
    let [x, y, dx, dy, score] = queue.shift();
    let i = id(x, y, dx, dy);
    if (score >= (map.get(i) || Number.MAX_SAFE_INTEGER)) {
      continue;
    }
    map.set(i, score);

    if (score >= minScore) {
      continue;
    }

    if (maze[y][x] == 'E') {
      minScore = Math.min(score, minScore);
      continue;
    }

    if (maze[y][x] == '#') {
      continue;
    }

    queue.push([x + dx, y + dy, dx, dy, score + 1]);
    queue.push([x - dy, y + dx, -dy, dx, score + 1001]);
    queue.push([x + dy, y - dx, dy, -dx, score + 1001]);
    queue.push([x - dx, y - dy, -dx, -dy, score + 2001]);
  }
  return minScore;
}

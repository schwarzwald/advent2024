module.exports = (input, width = 101, height = 103) => {
  let lines = input.split(/\r?\n/)
    .map(r => r.match(/p=(\d+),(\d+) v=(-?\d+),(-?\d+)/)
      .slice(1)
      .map(Number));

  let positions = lines.map(([px, py, vx, vy]) => [(px + (vx + width) * 100) % width, (py + (vy + height) * 100) % height]);

  let quadrants = [0, 0, 0, 0];
  for (let [px, py] of positions) {
    let quadrant = 0;
    if (px >= (width + 1) / 2) {
      quadrant += 1;
    }
    if (py >= (height + 1) / 2) {
      quadrant += 2;
    }

    if (px != (width - 1) / 2 && py != (height - 1) / 2) {
      quadrants[quadrant]++;
    }
  }

  return quadrants.reduce((a, b) => a * b);
}

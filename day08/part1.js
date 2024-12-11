module.exports = input => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split(''));

  let antennas = new Map();
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      let symbol = grid[y][x];
      if (symbol != '.') {
        let nodes = antennas.get(symbol) || [];
        nodes.push([x, y]);
        antennas.set(symbol, nodes);
      }
    }
  }

  const inBounds = (x, y) => {
    return x >= 0 && x < grid[0].length && y >= 0 && y < grid.length;
  }

  let antinodes = new Set();
  for (let nodes of antennas.values()) {
    for (let i = 0; i < nodes.length - 1; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        let a = nodes[i];
        let b = nodes[j];

        let dx = b[0] - a[0];
        let dy = b[1] - a[1];

        [[b[0] + dx, b[1] + dy], [a[0] - dx, a[1] - dy]]
          .filter(p => inBounds(...p))
          .map(([px, py]) => `${px}#${py}`)
          .forEach(p => antinodes.add(p));
      }
    }
  }

  return antinodes.size;
}

module.exports = input => {
  let [towels, designs] = input.split(/\r?\n\r?\n/);
  towels = towels.split(', ');
  designs = designs.split(/\r?\n/);

  const cache = new Map();

  const count = design => {
    if (cache.has(design)) {
      return cache.get(design);
    }

    let result = !design.length ? 1 : towels.filter(t => design.startsWith(t))
      .map(t => design.substring(t.length))
      .map(count)
      .reduce((a, b) => a + b, 0);

    cache.set(design, result);
    return result;
  }

  return designs.map(count).reduce((a, b) => a + b);
}

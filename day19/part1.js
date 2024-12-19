module.exports = input => {
  let [towels, designs] = input.split(/\r?\n\r?\n/);
  towels = towels.split(', ');
  designs = designs.split(/\r?\n/);

  const cache = new Map();

  const isPossible = design => {
    if (cache.has(design)) {
      return cache.get(design);
    }

    let possible = !design.length || towels.filter(t => design.startsWith(t))
      .map(t => design.substring(t.length))
      .some(isPossible);

    cache.set(design, possible);
    return possible;
  }

  return designs.filter(isPossible).length;
}

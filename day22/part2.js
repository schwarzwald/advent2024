module.exports = input => {
  let numbers = input.split(/\r?\n/).map(BigInt);

  let prices = [];
  for (let number of numbers) {
    let result = number;
    let price = [];
    prices.push(price);

    for (let i = 0; i < 2000; i++) {
      price.push(result % 10n);
      result = (result ^ (result << 6n)) % 16777216n;
      result = (result ^ (result >> 5n)) % 16777216n;
      result = (result ^ (result << 11n)) % 16777216n;
    }
  }

  let map = new Map();
  for (let k = 0; k < prices.length; k++) {
    let visited = new Set();

    for (let m = 4; m < prices[k].length; m++) {
      let k1 = prices[k][m - 3] - prices[k][m - 4];
      let k2 = prices[k][m - 2] - prices[k][m - 3];
      let k3 = prices[k][m - 1] - prices[k][m - 2];
      let k4 = prices[k][m] - prices[k][m - 1];

      let id = `${k1},${k2},${k3},${k4}`;
      if (visited.has(id)) {
        continue;
      }
      visited.add(id);

      map.set(id, (map.get(id) || 0n) + prices[k][m]);
    }
  }

  let max = 0n;
  for (let a of map.values()) {
    if (a > max) {
      max = a;
    }
  }

  return max;
}

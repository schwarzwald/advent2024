module.exports = input => {
  let numbers = input.split(/\r?\n/).map(BigInt);

  let sum = 0n;
  for (let number of numbers) {
    let result = number;
    for (let i = 0; i < 2000; i++) {
      result = (result ^ (result << 6n)) % 16777216n;
      result = (result ^ (result >> 5n)) % 16777216n;
      result = (result ^ (result << 11n)) % 16777216n;
    }
    sum += result;
  }

  return sum;
}

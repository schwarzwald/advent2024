const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 03: Part 1', () => {
  it('Should add results of multiplications', () => {
    expect(part1('xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))')).to.equal(161);
  });
});
describe('Day 03: Part 2', () => {
  it('Should add results of enabled multiplications', () => {
    expect(part2(`xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`)).to.equal(48);
  });
});

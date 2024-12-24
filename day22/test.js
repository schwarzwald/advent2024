const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 22: Part 1', () => {
  it('Should sum the 2000th secret numbers', () => {
    expect(part1(`1
10
100
2024`)).to.equal(37327623n);
  });
});
describe('Day 22: Part 2', () => {
  it('Should calculate the most bananas which can be bought', () => {
    expect(part2(`1
2
3
2024`)).to.equal(23n);
  });
});

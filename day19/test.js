const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 19: Part 1', () => {
  it('Should', () => {
    expect(part1(`r, wr, b, g, bwu, rb, gb, br

brwrr
bggr
gbbr
rrbgbr
ubwu
bwurrg
brgr
bbrgwb`)).to.equal(6);
  });
});
describe('Day 19: Part 2', () => {
  it('Should', () => {
    expect(part2(`r, wr, b, g, bwu, rb, gb, br

brwrr
bggr
gbbr
rrbgbr
ubwu
bwurrg
brgr
bbrgwb`)).to.equal(16);
  });
});

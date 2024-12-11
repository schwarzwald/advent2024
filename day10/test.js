const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 10: Part 1', () => {
  it('Should', () => {
    expect(part1(`89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`)).to.equal(36);
  });
});
describe('Day 10: Part 2', () => {
  it('Should', () => {
    expect(part2(`89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`)).to.equal(81);
  });
});

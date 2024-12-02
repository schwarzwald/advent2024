const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 01: Part 1', () => {
  it('Should find sum of distances between lists', () => {
    expect(part1(`3   4
4   3
2   5
1   3
3   9
3   3`)).to.equal(11);
  });
});
describe('Day 01: Part 2', () => {
  it('Should find the similarity score of the two lists', () => {
    expect(part2(`3   4
4   3
2   5
1   3
3   9
3   3`)).to.equal(31);
  });
});

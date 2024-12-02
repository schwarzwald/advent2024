const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 02: Part 1', () => {
  it('Should count safe reports', () => {
    expect(part1(`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`)).to.equal(2);
  });
});
describe('Day 02: Part 2', () => {
  it('Should count safe reports with Problem Dampener', () => {
    expect(part2(`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`)).to.equal(4);
  });
});

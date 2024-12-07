const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 07: Part 1', () => {
  it('Should count how many equations are solvable and sum their answers', () => {
    expect(part1(`190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`)).to.equal(3749);
  });
});
describe('Day 07: Part 2', () => {
  it('Should count how many equations are solvable including concatenation and sum their answers', () => {
    expect(part2(`190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`)).to.equal(11387);
  });
});

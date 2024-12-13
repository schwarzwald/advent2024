const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 13: Part 1', () => {
  it('Should calculate how many tokes to use to win the most prizes', () => {
    expect(part1(`Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`)).to.equal(480);
  });
});
describe('Day 13: Part 2', () => {
  it('Should calculate how many tokes to use to win the most prizes with prize offset', () => {
    expect(part2(`Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`)).to.equal(875318608908);
  });
});

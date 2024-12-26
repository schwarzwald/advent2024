const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 17: Part 1', () => {
  it('Should calculate output of the program', () => {
    expect(part1(`Register A: 729
Register B: 0
Register C: 0

Program: 0,1,5,4,3,0`)).to.equal('4,6,3,5,6,3,5,2,1,0');
  });
});
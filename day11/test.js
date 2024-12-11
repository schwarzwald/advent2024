const expect = require('expect.js');
const part1 = require('./part1');

describe('Day 11: Part 1', () => {
  it('Should count the stones after 25 blinkks', () => {
    expect(part1(`125 17`)).to.equal(55312);
  });
});
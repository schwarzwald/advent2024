const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 09: Part 1', () => {
  it('Should calculate checksum after refragmentation', () => {
    expect(part1('2333133121414131402')).to.equal(1928);
  });
});
describe('Day 09: Part 2', () => {
  it('Should calculate checksum after file-based refragmentation', () => {
    expect(part2('2333133121414131402')).to.equal(2858);
  });
});

const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 04: Part 1', () => {
  it('Should count number of XMAS occurences', () => {
    expect(part1(`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`)).to.equal(18);
  });
});
describe('Day 04: Part 2', () => {
  it('Should', () => {
    expect(part2(`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`)).to.equal(9);
  });
});

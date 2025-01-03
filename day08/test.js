const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 08: Part 1', () => {
  it('Should count unique locations with antinodes', () => {
    expect(part1(`............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`)).to.equal(14);
  });
});
describe('Day 08: Part 2', () => {
  it('Should count unique locations with antinodes including resonant frequencies', () => {
    expect(part2(`............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`)).to.equal(34);
  });
});

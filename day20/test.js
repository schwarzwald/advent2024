const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 20: Part 1', () => {
  it('Should count how many cheats save at least 20 picoseconds', () => {
    expect(part1(`###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`, 20)).to.equal(5);
  });
});
describe('Day 20: Part 2', () => {
  it('Should count how many cheats save at least 70 picoseconds using cheats for up to 20 picoseconds', () => {
    expect(part2(`###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`, 70)).to.equal(41);
  });
});

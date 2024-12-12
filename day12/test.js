const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 12: Part 1', () => {
  it('Should calculate price of fences', () => {
    expect(part1(`RRRRIICCFF
RRRRIICCCF
VVRRRCCFFF
VVRCCCJFFF
VVVVCJJCFE
VVIVCCJJEE
VVIIICJJEE
MIIIIIJJEE
MIIISIJEEE
MMMISSJEEE`)).to.equal(1930);
  });
});
describe('Day 12: Part 2', () => {
  it('Should calculate price of fences using number of sides as perimeter', () => {
    expect(part2(`RRRRIICCFF
RRRRIICCCF
VVRRRCCFFF
VVRCCCJFFF
VVVVCJJCFE
VVIVCCJJEE
VVIIICJJEE
MIIIIIJJEE
MIIISIJEEE
MMMISSJEEE`)).to.equal(1206);
  });
});

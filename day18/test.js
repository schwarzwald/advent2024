const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 18: Part 1', () => {
  it('Should find shortest path after x fallen bytes', () => {
    expect(part1(`5,4
4,2
4,5
3,0
2,1
6,3
2,4
1,5
0,6
3,3
2,6
5,1
1,2
5,5
2,5
6,5
1,4
0,4
6,4
1,1
6,1
1,0
0,5
1,6
2,0`, 7, 12)).to.equal(22);
  });
});
describe('Day 18: Part 2', () => {
  it('Should find the byte after which there is no path to the finish', () => {
    expect(part2(`5,4
4,2
4,5
3,0
2,1
6,3
2,4
1,5
0,6
3,3
2,6
5,1
1,2
5,5
2,5
6,5
1,4
0,4
6,4
1,1
6,1
1,0
0,5
1,6
2,0`, 7, 12)).to.equal('6,1');
  });
});

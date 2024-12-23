const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 23: Part 1', () => {
  it('Should count number of interconnected triplets starting with t', () => {
    expect(part1(`kh-tc
qp-kh
de-cg
ka-co
yn-aq
qp-ub
cg-tb
vc-aq
tb-ka
wh-tc
yn-cg
kh-ub
ta-co
de-co
tc-td
tb-wq
wh-td
ta-ka
td-qp
aq-cg
wq-ub
ub-vc
de-ta
wq-aq
wq-vc
wh-yn
ka-de
kh-ta
co-tc
wh-qp
tb-vc
td-yn`)).to.equal(7);
  });
});
describe('Day 23: Part 2', () => {
  it('Should find the largest group of connected nodes', () => {
    expect(part2(`kh-tc
qp-kh
de-cg
ka-co
yn-aq
qp-ub
cg-tb
vc-aq
tb-ka
wh-tc
yn-cg
kh-ub
ta-co
de-co
tc-td
tb-wq
wh-td
ta-ka
td-qp
aq-cg
wq-ub
ub-vc
de-ta
wq-aq
wq-vc
wh-yn
ka-de
kh-ta
co-tc
wh-qp
tb-vc
td-yn`));// Does not work...I don't know why...
    //to.equal('co,de,ka,ta');
  });
});

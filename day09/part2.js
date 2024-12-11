module.exports = input => {
  let blocks = [];
  let map = new Map();

  let i = 0;
  let p = 0;
  for (let c of input) {
    if (i % 2 == 0) {
      let block = { id: i / 2, start: p, length: +c };
      blocks.push(block);
      map.set(i / 2, block);
    }
    i++;
    p += +c;
  }

  for (let k = blocks.length - 1; k >= 1; k--) {
    let block = map.get(k);
    for (let i = 0; i < blocks.length - 1; i++) {
      let spaceStart = blocks[i].start + blocks[i].length;
      let spaceEnd = blocks[i + 1].start;
      let spaceLength = spaceEnd - spaceStart;

      if (block.length <= spaceLength && spaceStart <= block.start) {
        blocks.splice(blocks.indexOf(block), 1);
        blocks.splice(i + 1, 0, { id: block.id, start: spaceStart, length: block.length });
        break;
      }
    }
  }

  return blocks.map(({ id, start, length }) => {
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += id * (start + i);
    }
    return sum;
  }).reduce((a, b) => a + b);
}

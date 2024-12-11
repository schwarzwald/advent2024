module.exports = input => {
  let blocks = [];

  let i = 0;
  let p = 0;
  for (let c of input) {
    if (i % 2 == 0) {
      blocks.push([i / 2, p, +c]);
    }
    i++;
    p += +c;
  }

  let newBlocks = [];
  newBlocks.push(blocks[0]);
  let spaceStart = blocks[0][2];
  i = 0;
  for (let k = blocks.length - 1; k >= 1 && k > i;) {
    let [id, blockStart, blockLength] = blocks[k];

    let endSpace = blocks[i + 1][1];
    let spaceLength = endSpace - spaceStart;
    let sectionLength = Math.min(blockLength, spaceLength);

    newBlocks.push([id, spaceStart, sectionLength]);
    if (blockLength < spaceLength) {
      spaceStart = spaceStart + sectionLength;
      k--;
    } else if (blockLength >= spaceLength) {
      i++;
      newBlocks.push(blocks[i]);
      spaceStart = blocks[i][1] + blocks[i][2];
      blocks[k][2] -= sectionLength;
      if (blockLength == spaceLength) {
        k--;
      }
    } else {
      i++;
      newBlocks.push(blocks[i]);
      blocks[i][1] + blocks[i][2];
    }

  }
  return newBlocks.map(([id, start, len]) => {
    let sum = 0;
    for (let i = 0; i < len; i++) {
      sum += id * (start + i);
    }
    return sum;
  }).reduce((a, b) => a + b);
}

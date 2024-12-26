module.exports = input => {
  let groups = input.split(/\r?\n\r?\n/);
  let [a, b, c] = groups[0].split(/\r?\n/).map(r => +r.split(': ')[1]);
  let program = groups[1].split(': ')[1].split(',').map(Number);
  let ip = 0;

  const combo = i => {
    if (i <= 3) {
      return i;
    }
    if (i == 4) {
      return a;
    }
    if (i == 5) {
      return b;
    }
    if (i = 6) {
      return c;
    }
  }


  let output = [];
  while (ip >= 0 && ip < program.length) {
    let instruction = program[ip];
    let operand = program[ip + 1];

    switch (instruction) {
      case 0:
        a = Math.floor(a / (2 ** combo(operand)));
        ip += 2;
        break;
      case 1:
        b = b ^ operand;
        ip += 2;
        break;
      case 2:
        b = combo(operand) % 8;
        ip += 2;
        break;
      case 3:
        ip = a == 0 ? ip + 2 : operand;
        break;
      case 4:
        b = b ^ c;
        ip += 2;
        break;
      case 5:
        output.push(combo(operand) % 8);
        ip += 2;
        break;
      case 6:
        b = Math.floor(a / (2 ** combo(operand)));
        ip += 2;
        break;
      case 7:
        c = Math.floor(a / (2 ** combo(operand)));
        ip += 2;
        break;
    }
  }
  return output.join(',');
}

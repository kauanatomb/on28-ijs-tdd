function fibonacciSeq(n) {
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }

  return sequence;
}

module.exports = fibonacciSeq;
const searchBruteForce = <T>(sequence: T[], set: T[]) => {
  let i = 0,
    j = 0,
    m = sequence.length,
    n = set.length;
  while (j < m && i < n) {
    if (set[i] !== sequence[j]) {
      i -= j - 1;
      j = -1;
      // -1 because both get incremented afterwards
    }
    i++;
    j++;
  }
  if (j === m) {
    return i - m;
  }
  return -1;
};

export default searchBruteForce;
const searchKMP = <T>(sequence: T[], pattern: T[]) => {
    let i = 0, j = 0, m = sequence.length, n = pattern.length;
    const shifts = calculateShifts(pattern);
    for (i = 0, j = 0; j < n && i < m; i++, j++) {
        while(j >= 0 && sequence[i] !== pattern[j]) {
            j = shifts[j];
        }
    }
    if(j === n) {
        return i - n;
    }
    return -1;
}

const calculateShifts = <T>(pattern: T[]) => {
    const shifts: number[] = [-1];
    for (let i = 0, j = -1; i < pattern.length - 1; i++, j++, shifts[i] = j) { 
        while(j>=0 && pattern[i]!==pattern[j]) {
            j = shifts[j];
        }
    }
    return shifts;
}

export default searchKMP;
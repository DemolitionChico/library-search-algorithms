const searchBm = (text: string, pattern: string) => {
    const shifts = getStringShifts(pattern);
    let i = pattern.length - 1;
    for (let j = pattern.length - 1; j > 0; i--, j--) {
        while (text[i] !== pattern[j]) {
            const s = shifts[text[i]];
            i += pattern.length - j > s ? pattern.length - j : s;
            if(i >= text.length) {
                return -1;
            }
            j = pattern.length - 1;
        }        
    }
    return i;
}

const getStringShifts = (pattern: string) => {
    const shifts = [...ALPHABET].reduce<any>((shifts, c) => shifts = { ...shifts, [c]: pattern.length }, {});
    [...pattern].forEach((x, i) => shifts[x] = pattern.length - i - 1);
    return shifts;
}

const ALPHABET = " aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż0123456789";

export default searchBm;
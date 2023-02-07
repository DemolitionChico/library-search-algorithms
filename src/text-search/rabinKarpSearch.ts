const ALPHABET = " aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż0123456789";
const P = 33554393;         // a large prime number
const D = ALPHABET.length;  // number of all letters

const searchRK = <T>(text: T[], pattern: T[]) => {
    const m = pattern.length;
    const n = text.length;
    const d1 = Math.pow(D, pattern.length - 1) % P;
    let ptrnHsh = 0, txtHsh = 0;
    for (let i = 0; i < pattern.length; i++) {
        ptrnHsh = (D * ptrnHsh + getHash(pattern[i])) % P;
        txtHsh = (D * txtHsh + getHash(text[i])) % P;
    }
    let i = 0;
    for (; ptrnHsh !== txtHsh; i++) {
        // it's not perfect, two sequences might have the same hash, so when it's equal
        // the algorithm should iterate over each element to make sure it's identical
        if(i > n - m) {
            return -1;
        }   
        txtHsh = (txtHsh - getHash(text[i]) * d1) * D + getHash(text[i + m]) % P;
        txtHsh = txtHsh < 0 ? txtHsh + P : txtHsh;
    }
    return i;
}

const getHash = <T>(val: T): number => {
    return ("" + val).codePointAt(0) || 0;
}

export default searchRK;
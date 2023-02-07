const searchLinearly = (array: number[], value: number): number => {
    let i = array.length - 1;
    for (; i >= 0 && array[i] != value; i--);
    return i;
}

export default searchLinearly;
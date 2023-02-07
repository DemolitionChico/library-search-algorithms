export const searchBinarilyRecursively = (
  array: number[],
  value: number,
  left?: number,
  right?: number
): number => {
  left = left ?? 0;
  right = right ?? array.length - 1;
  const mid = (left + right) / 2;
  if (left > right) {
    return -1;
  }
  if (array[mid] === value) {
    return mid;
  }
  if (array[mid] > value) {
    return searchBinarilyRecursively(array, value, left, mid - 1);
  } else {
    return searchBinarilyRecursively(array, value, mid + 1, right);
  }
};

export const searchBinarilyIteratively = (array: number[], value: number) => {
  let left = 0, right = array.length - 1, mid, index = -1;
  while(left < right) {
    mid = Math.floor((left + right) / 2);
    if(array[mid] == value) {
      return mid;
    }
    if (array[mid] > value) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return index;
}
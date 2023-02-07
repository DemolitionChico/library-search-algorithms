"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBinarilyRecursively = void 0;
const searchBinarilyRecursively = (array, value, left, right) => {
    left = left !== null && left !== void 0 ? left : 0;
    right = right !== null && right !== void 0 ? right : array.length - 1;
    const mid = (left + right) / 2;
    if (left > right) {
        return -1;
    }
    if (array[mid] === value) {
        return mid;
    }
    if (array[mid] > value) {
        return (0, exports.searchBinarilyRecursively)(array, value, left, mid - 1);
    }
    else {
        return (0, exports.searchBinarilyRecursively)(array, value, mid + 1, right);
    }
};
exports.searchBinarilyRecursively = searchBinarilyRecursively;

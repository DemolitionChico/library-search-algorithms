"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchLinearly = (array, value) => {
    let i = array.length - 1;
    for (; i >= 0 && array[i] != value; i--)
        ;
    return i;
};
exports.default = searchLinearly;

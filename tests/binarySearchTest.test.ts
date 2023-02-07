import { getItemNotInSortedArray, getItemNotInUnsortedArray, getSortedArray, getUnsortedArray } from "./testUtils";
import {searchBinarilyIteratively, searchBinarilyRecursively} from "../src/search/binarySearch";

describe("recursive binary search", () => {

    it("should find a porper item index", () => {
        const array = getSortedArray();
        const value = array[5];

        const index = searchBinarilyRecursively(array, value);

        expect(index).toEqual(5);
    });

    it("should return -1 when index not found", () => {
        const array = getUnsortedArray();
        const value = getItemNotInSortedArray();

        const index = searchBinarilyRecursively(array, value);

        expect(index).toEqual(-1);
    });
});

describe("iterative binary search", () => {

    it("should find a porper item index", () => {
        const array = getSortedArray();
        const value = array[5];

        const index = searchBinarilyIteratively(array, value);

        expect(index).toEqual(5);
    });

    it("should return -1 when index not found", () => {
        const array = getUnsortedArray();
        const value = getItemNotInSortedArray();

        const index = searchBinarilyIteratively(array, value);

        expect(index).toEqual(-1);
    });
});
import { getItemNotInUnsortedArray, getUnsortedArray } from "./testUtils";
import searchLinearly from "../src/search/linearSearch";

describe("linear search", () => {

    it("should find a porper item index", () => {
        const array = getUnsortedArray();
        const value = array[5];

        const index = searchLinearly(array, value);

        expect(index).toEqual(5);
    });

    it("should return -1 when index not found", () => {
        const array = getUnsortedArray();
        const value = getItemNotInUnsortedArray();

        const index = searchLinearly(array, value);

        expect(index).toEqual(-1);
    });
});
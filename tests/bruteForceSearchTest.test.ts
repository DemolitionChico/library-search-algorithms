import { getInvalidSequence, getTextSequence, getTextSet } from "./testUtils";
import searchBruteForce from "../src/text-search/bruteForce";

describe("brute force text search", () => {

    it("should find a porper text start index", () => {
        const set = getTextSet();
        const sequence = getTextSequence();

        const index = searchBruteForce(sequence, set);

        expect(index).toEqual(4);
    });

    it("should return -1 when text start index not found", () => {
        const set = getTextSet();
        const sequence = getInvalidSequence();

        const index = searchBruteForce(sequence, set);

        expect(index).toEqual(-1);
    });
});

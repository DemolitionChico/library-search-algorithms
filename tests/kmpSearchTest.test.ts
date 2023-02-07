import searchKMP from "../src/text-search/knuthPrattMorris";
import { getTextSequence, getTextSet } from "./testUtils";

describe("K-M-P text search", () => {

    it("should find a proper text start index", () => {
        const pattern = [..."12341234"];
        const text = [..."1234123512341234123"];

        const set = getTextSet();
        const sequence = getTextSequence();

        const index1 = searchKMP(text, pattern);
        const index2 = searchKMP(set, sequence);

        expect(index1).toEqual(8);
        expect(index2).toEqual(4);
    });

    it("should find a proper item index other than text", () => {
        const sequence = [1, 2, 3, 4, 5, 6, 7, 0, 0, 7, "parrot", "carrot", 999, "lol"];
        const pattern = [7, "parrot"];

        const index = searchKMP(sequence, pattern);

        expect(index).toEqual(9);
    });

    it("should return -1 when text start index not found", () => {
        const pattern = [..."12345"];
        const text = [..."1213141516172839"];

        const index = searchKMP(text, pattern);

        expect(index).toEqual(-1);
    });
});
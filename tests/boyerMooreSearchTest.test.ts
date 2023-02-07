import searchBm from "../src/text-search/boyerMoore";

describe("Boyer-Moore text search", () => {

    it("should find a proper text start index", () => {
        const text = "Imperare sibi maximum imperium est";
        const pattern = "max";

        console.log(`looking for ${pattern} in ${text}`);

        const index1 = searchBm(text, pattern);

        expect(index1).toEqual(14);
    });

    it("should return -1 when text start index not found", () => {
        const text = "1213141516172839";
        const pattern = "12345";

        const index = searchBm(text, pattern);

        expect(index).toEqual(-1);
    });
});
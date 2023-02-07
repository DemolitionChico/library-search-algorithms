import searchRk from "../src/text-search/rabinKarpSearch";

describe("Rabin-Karp text search", () => {

    it("should find a proper text start index", () => {
        const text = "Imperare sibi maximum imperium est";
        const pattern = "max";

        console.log(`looking for ${pattern} in ${text}`);

        const index1 = searchRk([...text], [...pattern]);

        expect(index1).toEqual(14);
    });

    it("should return -1 when text start index not found", () => {
        const text = "1213141516172839";
        const pattern = "12345";

        const index = searchRk([...text], [...pattern]);

        expect(index).toEqual(-1);
    });
});
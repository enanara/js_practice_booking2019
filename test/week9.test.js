const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPtime,
    createMatrix,
    areWeCovered
    
  } = require("../challenges/week9");
  
  describe("sumMultiples", () => {
    test("returns sum of numbers that are multiple of 3 or 5", () => {
      expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
      expect(sumMultiples([5, 3, 11])).toBe(8);
      expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
    });
  
    test("if any number is not multiple of 3 or 5 returns 0", () => {
      expect(sumMultiples([2, 4, 7, 8, 1, 13])).toBe(0);
    });
  });

  describe("isValidDNA", () => {
      test("returns true or false by checking if the string only contains C, G, A and T", ()=> {
          expect(isValidDNA("CGTTACGATGACCATGA")).toBe(true);
          expect(isValidDNA("CUTTAGUATGACUATGA")).toBe(false);
          expect(isValidDNA("CGTTACGATGACCATGA")).toBe(true);
          expect(isValidDNA("CGTTACGAUGACCUATGA")).toBe(false);
      })
      test("isValidDNA can be case insensitive", () => {
          expect(isValidDNA("tgcatgacctga")).toBe(true);
          expect(isValidDNA("uTga")).toBe(false);
      })
  })
  

  
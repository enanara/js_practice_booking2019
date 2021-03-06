const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
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
      });
      test("isValidDNA can be case insensitive", () => {
          expect(isValidDNA("tgcatgacctga")).toBe(true);
          expect(isValidDNA("uTga")).toBe(false);
      });
});

describe("getComplementaryDNA", () => {
    test("returns a string of complementary DNA that matchs T-A and C-G", ()=> {
        expect(getComplementaryDNA("A")).toEqual("T");
        expect(getComplementaryDNA("C")).toEqual("G");
        expect(getComplementaryDNA("G")).toEqual("C");
        expect(getComplementaryDNA("T")).toEqual("A");
        expect(getComplementaryDNA("CGTTACGATGACCATGA")).toEqual("GCAATGCTACTGGTACT");
        expect(getComplementaryDNA("AAAAAAAAAAACGT")).toEqual("TTTTTTTTTTTGCA");
        expect(getComplementaryDNA("ACGT")).toEqual("TGCA");
    });
    test("returns valid DNA required if string is not a valid DNA", ()=> {
        expect(getComplementaryDNA("UTGA")).toEqual("Valid DNA required")});
});

describe("isItPrime", () => {
    test("checks if given number is prime or not", () => {
        expect(isItPrime(1)).toBe(true);
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(6)).toBe(false);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
    });
    test("requires integer tobe given", () => {
        expect(isItPrime(2.5)).toEqual("Please give integer number");
    });
});

describe("createMatrix", () => {
    test("takes 2 arguments and returns a nested array filled with given word", ()=> {
        expect(createMatrix(3, "foo")).toEqual(
            [
                ["foo", "foo", "foo"],
                ["foo", "foo", "foo"],
                ["foo", "foo", "foo"]
            ]
        );
        expect(createMatrix(2,"ha")).toEqual(
            [
                ["ha", "ha"], 
                ["ha", "ha"]
            ]
        );
        expect(createMatrix(5,"a")).toEqual(
            [
                ["a", "a", "a", "a", "a"],
                ["a", "a", "a", "a", "a"],
                ["a", "a", "a", "a", "a"],
                ["a", "a", "a", "a", "a"],
                ["a", "a", "a", "a", "a"],
            ]
        );
        expect(createMatrix(1,"life")).toEqual(
            [
                ["life"]
            ]
        );
    });
});

describe("areWeCovered", () => {
    test("returns a boolean by checking at least 3 staff is working on  given day", () => {
        const staffArray = [
            {
                name: "Sally", 
                rota: ["Monday", "Thursday", "Sunday"]
            },
            {
                name: "Pedro", 
                rota: ["Monday", "Tuesday",  "Sunday"]
            },
            {
                name: "Emily", 
                rota: ["Thursday",  "Saturday", "Sunday"]
            },
            {
                name: "Fiona", 
                rota: ["Thursday", "Friday", "Sunday"]
            },
            {
                name: "Mark", 
                rota: ["Friday", "Saturday", "Sunday"]
            },
            {
                name: "Tom", 
                rota: ["Tuesday", "Wednesday", "Friday"]
            },
            {
                name: "Sam", 
                rota: ["Tuesday", "Wednesday", "Sunday"]
            } 
        ]
        expect(areWeCovered(staffArray,"Monday")).toBe(false);
        expect(areWeCovered(staffArray,"Tuesday")).toBe(true);
        expect(areWeCovered(staffArray,"Wednesday")).toBe(false);
        expect(areWeCovered(staffArray,"Thursday")).toBe(true);
        expect(areWeCovered(staffArray,"Friday")).toBe(true);
        expect(areWeCovered(staffArray,"Saturday")).toBe(false);
        expect(areWeCovered(staffArray,"Sunday")).toBe(true);
    });
});
  
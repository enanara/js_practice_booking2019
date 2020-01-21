const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner  
} = require("../challenges/week10");
  
describe("sumDigits", () => {
    test("takes a number and sums all digits in it", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(1234)).toBe(10);
        expect(sumDigits(1990)).toBe(19);
        expect(sumDigits(10000000000001)).toBe(2);
        expect(sumDigits(9999911111)).toBe(50);
    });
    test("if given number is not an integer still returns an correct answer not minding the `.` that separates the integer", () => {
        expect(sumDigits(12.3)).toBe(6);
        expect(sumDigits(123.4)).toBe(10);
        expect(sumDigits(1.990)).toBe(19);
        expect(sumDigits(100000.0001)).toBe(2);
        expect(sumDigits(99.99911111)).toBe(50);
    });
});

describe("createRange", () => {
    test("returns sum of numbers that are multiple of 3 or 5", () => {
      expect(createRange([5, 3, 7, 8, 1, 10])).toBe(18);
    });
});

describe("getScreentimeAlertList", () => {
    test("returns sum of numbers that are multiple of 3 or 5", () => {
      expect(getScreentimeAlertList([5, 3, 7, 8, 1, 10])).toBe(18);
    });
});

describe("hexToRGB", () => {
    test("returns sum of numbers that are multiple of 3 or 5", () => {
      expect(hexToRGB([5, 3, 7, 8, 1, 10])).toBe(18);
    });
});

describe("findWinner", () => {
    test("returns sum of numbers that are multiple of 3 or 5", () => {
      expect(findWinner([5, 3, 7, 8, 1, 10])).toBe(18);
    });
});
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
    test("returns array of numbers from 1st param to 2nd param and incremented by 3rd param", () => {
        expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(2,17,5)).toEqual([2, 7, 12, 17]);
        expect(createRange(3,11,3)).toEqual([3, 6, 9]);
        expect(createRange(5,40,10)).toEqual([5, 15, 25, 35]);
    });
    test("if 3rd param is not given increment by 1", () => {
        expect(createRange(2,8)).toEqual([2, 3, 4, 5, 6, 7, 8]);
        expect(createRange(19,23)).toEqual([19, 20, 21, 22, 23]);
    });
});

describe("getScreentimeAlertList", () => {
    test("returns sum of numbers that are multiple of 3 or 5", () => {
      expect(getScreentimeAlertList([5, 3, 7, 8, 1, 10])).toEqual([]);
    });
});

describe("hexToRGB", () => {
    test("", () => {
      expect(hexToRGB()).toBe();
    });
});

describe("findWinner", () => {
    test("", () => {
      expect(findWinner()).toBe();
    });
});
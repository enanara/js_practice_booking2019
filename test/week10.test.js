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
    const users = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                {
                    date: "2020-01-21",
                    usage: {
                        twitter: 34,
                        instagram: 20, 
                        facebook: 40
                    }
                },
                {
                    date: "2020-01-22",
                    usage: {
                        twitter: 56,
                        instagram: 40, 
                        facebook: 31
                    }
                },
                {
                    date: "2020-01-23",
                    usage: {
                        twitter: 33,
                        instagram: 60, 
                        facebook: 35
                    }
                },
                {
                    date: "2020-01-24",
                    usage: {
                        twitter: 50,
                        instagram: 50, 
                        facebook: 50
                    }
                }
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                {
                    date: "2020-01-21",
                    usage: {
                        mapMyRun: 55,
                        whatsApp: 50, 
                        facebook: 10
                    }
                },
                {
                    date: "2020-01-22",
                    usage: {
                        mapMyRun: 2,
                        instagram: 0, 
                        facebook: 10,
                        safari: 20
                    }
                },
                {
                    date: "2020-01-23",
                    usage: {
                        twitter: 0,
                        mapMyRun: 2, 
                        facebook: 15,
                        safari: 10
                    }
                },
                {
                    date: "2020-01-24",
                    usage: {
                        twitter: 0,
                        instagram: 0, 
                        facebook: 0
                    }
                }
            ]
        },
        {
            username: "ena_0901",
            name: "Ena Nara",
            screenTime: [
                {
                    date: "2020-01-21",
                    usage: {
                        slack: 10,
                        instagram: 10, 
                        facebook: 10,
                        gmail:10
                    }
                },
                {
                    date: "2020-01-22",
                    usage: {
                        slack: 20,
                        instagram: 20, 
                        facebook: 20,
                        gmail:20
                    }
                },
                {
                    date: "2020-01-23",
                    usage: {
                        slack: 30,
                        instagram: 30, 
                        facebook: 30,
                        gmail:30
                    }
                },
                {
                    date: "2020-01-24",
                    usage: {
                        slack: 40,
                        instagram: 40, 
                        facebook: 40,
                        gmail:40
                    }
                }
            ]
        }
    ];
    test("returns array with usernames that has more thant 100 minutes of screentime on given date", () => {
      expect(getScreentimeAlertList(users, "2020-01-21")).toEqual(["sam_j_1989"]);
      expect(getScreentimeAlertList(users, "2020-01-22")).toEqual(["beth_1234"]);
      expect(getScreentimeAlertList(users, "2020-01-23")).toEqual(["beth_1234", "ena_0901"]);
      expect(getScreentimeAlertList(users, "2020-01-24")).toEqual(["beth_1234", "ena_0901"]);
    });
    test("if given date data is not reacheble return message", () => {
        expect(getScreentimeAlertList(users, "2020-01-25")).toEqual("Date is not valid")
    })
});

describe("hexToRGB", () => {
    test("returns rgb color code in decimal given hexadecimal color codes", () => {
      expect(hexToRGB("#556677")).toBe("rgb (85, 102, 119)");
      expect(hexToRGB("#556666")).toBe("rgb (85, 102, 102)");
    });
});

describe("findWinner", () => {
    test("returns winner given an board array", () => {
      expect(findWinner([
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"]
      ])).toBe("X");
      expect(findWinner([
        ["X", "0", null],
        ["0", "X", "0"],
        ["X", "0", "X"]
      ])).toBe("X");
      expect(findWinner([
        ["X", "X", "0"],
        ["X", "0", "0"],
        [null, "X", "0"]
      ])).toBe("0");
      expect(findWinner([
        ["X", "0", null],
        ["X", null, "0"],
        [null, null, "0"]
      ])).toBe(null);
    });
});
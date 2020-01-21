const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  const strigNumber = n.toString();
  const arrayStringDigits = strigNumber.split('');
  const arrayNumberDigits = arrayStringDigits.map(string => Number(string));
  // To remove NaN 
  const filteredArray = arrayNumberDigits.filter(n => !isNaN(n) );
  return filteredArray.reduce(function(acc, cur){
    return acc+cur;
  });
};

const createRange = (start, end, step = 1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  var result = [];
  for (let i=start; i<=end; i+=step){
    result.push(i);
  }
  return result;
};

const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  var result = [];
  for ( let user of users){
    const screentime = user["screenTime"];
    const givenDate = (screentime.filter(obj => obj.date === date)).pop();
    if (givenDate === undefined){
      return "Date is not valid";
    } else {
    const usageArray = Object.values(givenDate["usage"]);
    const duration = usageArray.reduce((a,b)=> a+b);
    if (duration>100){
      result.push(user["username"]);
      }
    }
    }
  return result;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};

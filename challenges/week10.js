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

const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  // define variables 
  const red = hexStr.slice(1,3);
  const green = hexStr.slice(3,5);
  const blue = hexStr.slice(5,7);

  // convert hexadecimal to decimal
  const result = value => {
    return parseInt(value,16)
  }
  
  return "rgb ("+result(red)+", "+result(green)+", "+result(blue)+")";
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
  var winner = null;
  const checkCase = (value1, value2, value3)  => {
    if (winner !== null){
      return false;
    }
    if((value1 === value2 && value1 === value3) && value1 !== null){
      winner = value1;
    }
  }
  checkCase(board[0][0],board[1][1],board[2][2]);
  checkCase(board[0][2],board[1][1],board[2][0]);
  checkCase(board[0][0],board[1][0],board[2][0]);
  checkCase(board[0][1],board[1][1],board[2][1]);
  checkCase(board[0][2],board[1][2],board[2][2]);
  checkCase(board[0][0],board[0][1],board[0][2]);
  checkCase(board[1][0],board[1][1],board[1][2]);
  checkCase(board[2][0],board[2][1],board[2][2]);
  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};

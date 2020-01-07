const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const index = nums.indexOf(n);
  if ((index === -1)||(index === nums.length-1)){
    return null;
  } else {
    return nums[index+1];
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const result = {'1':0, '0':0};
  for (let i=0; i<str.length; i++){
      result [str[i]] += 1;
  }
  return result;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return Number(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};

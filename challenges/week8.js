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
  return (arrs.reduce((acc, val) => acc.concat(val), [])).reduce((acc,val)=> acc+val);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length < 2 ) {
    return arr;
  } else {
  const first = arr.shift();
  const last = arr.pop();
  arr.push(first);
  arr.unshift(last);
  return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  const values = Object.values(haystack);
  for(let val of values){
    if(typeof(val)==="string"){
      let str = val.toLowerCase();
      let needle = searchTerm.toLowerCase();
      if(str.includes(needle)){
        return true;
      }
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  
  const result = {};
  const arr = (str.replace(/[^a-zA-Z ]/g, "")).split(' ').map(word => word.toLowerCase());
  for (let i=0; i<arr.length; i++){
    const word = arr[i];
    if (result[word] === undefined){
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }
  return result; 
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

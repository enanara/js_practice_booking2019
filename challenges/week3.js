function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(function(x){
    return x*x;
  })
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // let array = [words[0]];
  // for (let i=1; i<words.length; i++){
  //   array.push(words[i].replace(words[i][0],words[i][0].toUpperCase()));
  // }
  // return array.join('');
  let arr = words.map(function(word){
    return word.replace(word[0],word[0].toUpperCase());
  });
  let str = arr.join('');
  return str.replace(str[0],str[0].toUpperCase());
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

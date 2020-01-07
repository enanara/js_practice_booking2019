function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(function(x){
    return x*x;
  })
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let arr = words.map(function(word){
    return word.replace(word[0],word[0].toUpperCase());
  });
  let str = arr.join('');
  return str.replace(str[0],str[0].toLowerCase());
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let numArr = people.map(function(person){
    return (person.subjects).length;
  });
  return numArr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let isInclude = false;
  for (let x of menu){
    if(x.ingredients.includes(ingredient)){
      isInclude = true;
    }
  }
  return isInclude;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let array = arr1.filter (function(x){
    return arr2.includes(x);
  });
  return [... new Set(array)].sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

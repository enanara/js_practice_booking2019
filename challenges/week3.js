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
  // let sum=0;
  // for (let i=0;i<people.length; i++){
  //   sum += people[i].subjects.length;
  // }
  // return sum;
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
  // let array = [];
  // for (let i=0; i<arr1.length;i++){
  //   if (arr2.includes(arr1[i])){
  //     if (!array.includes(arr1[i])){
  //       array.push(arr1[i]);
  //     }
  //   }
  // }
  // return array.sort();
  let array = arr1.filter (function(x){
    return arr2.includes(x);
  });
  return (array.sort()).filter(function(x,pos){
    return array.indexOf(x)==pos;
  });
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let result =[];
  // for (let i=0; i<nums.length;i++){
  //   if (nums[i]<1){
  //     result.push(nums[i]);
  //   }
  // }
  nums.forEach(function(x){
    if (x<1){
      result.push(x);
    }
  });
  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let result = [];
  // for (let i=0; i<names.length; i++){
  //   if(char===names[i][0]){
  //     result.push(names[i]);
  //   }
  // }
  names.forEach(function(x){
    if(char===x[0]){
      result.push(x);
    }
  });
  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let result=[];
  // for (let i=0;i<words.length;i++){
  //   if(words[i].includes("to ")){
  //     result.push(words[i]);
  //   }
  // }
  words.forEach(function(x){
    if(x.includes("to ")){
      result.push(x);
    }
  });
  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let result=[];
  // for (let i=0;i<nums.length;i++){
  //   if (nums[i]%1===0){
  //     result.push(nums[i]);
  //   }
  // }
  nums.forEach(function(x){
    if(x%1===0){
      result.push(x);
    }
  });
  return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let result=[];
  // for (let i=0;i<users.length;i++){
  //   result.push(users[i].data.city.displayName);
  // }
  users.forEach(function(x){
    result.push(x.data.city.displayName);
  });
  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let result=[];
  for (let i=0;i<nums.length;i++){
    result.push(Math.round((Math.sqrt(nums[i]))*100)/100);
  }
  return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let result=[];
  for (let i=0;i<sentences.length;i++){
    if((sentences[i].toLowerCase()).includes(str.toLowerCase())){
      result.push(sentences[i]);
    }
  }
  return result;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let result=[];
  for (let i=0;i<triangles.length;i++){
    result.push(Math.max(...triangles[i]));
  }
  return result;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};

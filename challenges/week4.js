function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function(x){
    return x<1;
  });
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(function(x){
    return char===x[0];
  });
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(function(x){
    return x.includes("to ");
  });
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function(x){
    return x%1===0;
  });
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(function(x){
    return x.data.city.displayName;
  });
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(function(x){
    return Math.round(Math.sqrt(x)*100)/100;
  });
  // let result=[];
  // // for (let i=0;i<nums.length;i++){
  // //   result.push(Math.round((Math.sqrt(nums[i]))*100)/100);
  // // }
  // nums.forEach(function(x){
  //   result.push((Math.round(Math.sqrt(x)*100))/100);
  // });
  // return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let result=[];
  // for (let i=0;i<sentences.length;i++){
  //   if((sentences[i].toLowerCase()).includes(str.toLowerCase())){
  //     result.push(sentences[i]);
  //   }
  // }
  sentences.forEach(function(x){
    if(x.toLowerCase().includes(str.toLowerCase())){
      result.push(x);
    }
  });
  return result;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let result=[];
  // for (let i=0;i<triangles.length;i++){
  //   result.push(Math.max(...triangles[i]));
  // }
  triangles.forEach(function(x){
    result.push(Math.max(...x));
  });
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

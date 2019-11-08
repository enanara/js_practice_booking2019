function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  var firstChar = word[0];
  var cap = firstChar.toUpperCase();
  var remain = word.slice(1, word.length);
  return cap+remain;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  var fnInitial = firstName[0].toUpperCase();
  var lnInitial = lastName[0].toUpperCase();
  return fnInitial + "." + lnInitial;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  var vat = originalPrice*vatRate/100;
  return Math.round((originalPrice+vat)*100)/100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  var sale = originalPrice*reduction/100;
  return Math.round((originalPrice-sale)*100)/100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var x = str.length;
  if (x%2===1){
    return str.slice((x-1)/2,(x+1)/2);
  } else {
    return str.slice((x/2-1),(x/2+1));
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("")
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(function(word){
    return word.split("").reverse().join("")
  });
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};

function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings ;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if ((person.city).toLowerCase()==="manchester"){
    return true;
  } else {return false;}
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  var busCapacity = 40;
  return Math.ceil(people/busCapacity);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var sheepArr = arr.filter(function(animals){
    return animals==="sheep";
  });
  return sheepArr.length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let getAddress = person.address;
  let getPostCode = getAddress.postCode;
  let firstLetter = getPostCode[0];
  if (firstLetter==="M"&&person.address.city === "Manchester"){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};

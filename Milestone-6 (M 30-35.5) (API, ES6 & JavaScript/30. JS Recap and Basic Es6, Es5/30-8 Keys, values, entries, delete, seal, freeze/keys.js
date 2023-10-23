const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

console.log(glass);
const keys = Object.keys(glass);
console.log(keys); // result: [ 'name', 'color', 'price', 'isCleaned' ]

const values = Object.values(glass);
console.log(values); // result: [ 'glass', 'golden', 12, true ]

// advanced
const pair = Object.entries(glass);
console.log(pair);
// array of
// [
//   ["name", "glass"],
//   ["color", "golden"],
//   ["price", 12],
//   ["isCleaned", true],
// ];


// delete system advanced
delete glass.isCleaned;
console.log(glass);

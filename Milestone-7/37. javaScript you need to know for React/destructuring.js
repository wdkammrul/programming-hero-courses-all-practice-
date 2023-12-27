// নিচের টপিকগুলো পারতেই হবে ।
// 1. array destructuring
// 2. object destructuring


// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]
const [x, y] = numbers;
console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// const [first, second] = [90, 34]
const [first, second] = boxify(90, 34);

console.log(boxify(90, 34));

const student = {
  name: "Kamrul Islam",
  age: "24",
  address: ["dhaka", "bangladesh"],
};

const [city, country] = student.address;



// 2. object destructuring
const { name, age } = { name: "kamrul", age: 22 };

const employee = {
  id: "vs code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 55,
    weight: 75,
    address: "haritana",
    drink: "milk",
    watch: {
      color: "black",
      price: 400,
      brand: "garnin",
    },
  },
};

const { machinem, id } = employee;
const { weight, height } = employee.specification;
const { brand } = employee?.specification.watch;
console.log(weight, height, machinem, id, brand);

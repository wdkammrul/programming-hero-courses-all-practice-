// নিচের টপিকগুলো পারতেই হবে ।
// 1. Tamplate string
// 2. ARROW FUNCTION 
// 3. SPREAD OPERATOR  


const numbers = [89, 35, 98, 12];
const student = {
  name: "Kamrul Islam",
  age: "24",
  address: ["dhaka", "bangladesh"],
};


// 1. Tamplate string (এটা মাস্ট বুঝতেই হবে । `` এই স্ট্রিংটা ।)
const about = `My name is ${student.name}, I am ${student.age} years old. This is my present Address: ${student.address}
This is my country name: ${student.address[1]}
This is numbers array 3rd index: ${numbers[3]}`;
console.log(about)



// 2. ARROW FUNCTION  
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2; 
    return sum
}



// 3. SPREAD OPERATOR  
const newNumbers = numbers;
numbers.push(99);
console.log(newNumbers)




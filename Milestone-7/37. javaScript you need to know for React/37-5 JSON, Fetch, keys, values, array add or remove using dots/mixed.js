// নিচের টপিকগুলো পারতেই হবে ।
// 1. JSON stringify
// 2. JSON.parse

const student = {
  name: "Kamrul Islam",
  age: "24",
  address: ["dhaka", "bangladesh"],
};

// 1. JSON stringify  স্ট্রিং আকারে অবজেক্টকে দেখতে হলে ।
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

// 2. JSON.parse স্ট্রিং থেকে পার্স করার জন ্য
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// // 3. fetch
// fetch('url')
// .then(res=> res.json())
// .then(data => console.log(data))

// 4. keys, values
const keys = Object.keys(student);
const valus = Object.values(student);

// 5. forEach, map
const numbers = [33, 44, 56, 65, 34, 32, 54, 45];
numbers.forEach((num) => console.log(num)); // যদি রিটার্নের কোনো প্রয়োজন না হয় তাহলে আমি forEach ব্যবহার করবো ।
numbers.map(num => num*2);


// 6. for of on array like ovject 
// 7. loop on an object using for in 


// 8. add or remove from an array 
const products = [
  { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ribon", color: "black" },
  { name: "camera", price: 20000, brand: "ribon", color: "red" },
];

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'}

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];

// create a new array without one specific item 
// remove phone means create a new array without the phone 

const remaining = products.filter (p => p.name !== 'phone') // মোবাইল বাদে অন্য প্রডাক্টগুলো দেখাও । 
console.log(remaining)
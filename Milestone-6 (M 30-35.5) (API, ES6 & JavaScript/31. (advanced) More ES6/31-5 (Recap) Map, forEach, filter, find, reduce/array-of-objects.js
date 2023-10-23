/*
1. map
2. forEach
3. filter
4. find

*/

const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 60000 },
  { id: 3, name: "hp", price: 75000 },
  { id: 4, name: "mac", price: 95000 },
];

// map 
const names = products.map((product) => product.name);
// console.log(names)

const prices = products.map((p) => p.price);
// console.log(prices); // [ 65000, 60000, 75000, 95000 ]

// forEach  
products.forEach(p => console.log(p.id)); // 1, 2, 3, 4

// filter 
const expensive = products.filter(p => p.price > 4000);
// console.log(expensive)

// find  
const affordable = products.find(p => p.price < 70000) 
console.log(affordable) // { id: 1, name: 'lenovo', price: 65000 } ৭০০০০ এর নিচে কিন্তু কয়েকটাই ছিলো বাট একটাকেই রেজাল্ট দিয়েছে । 



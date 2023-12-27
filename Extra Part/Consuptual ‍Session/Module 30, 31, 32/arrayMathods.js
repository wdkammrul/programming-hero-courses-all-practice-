/* 
নিচে আমরা এগুলো শিখবো 
1. forEach
2. Map
3. Find
4. Filter
5. Reduce
*/

// const arr = [1, 2, 3];

// // old system
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for of system a item add
// for (let item of arr) {
//   console.log('for of',item);
// }

// //system-1. forEach  for of ar alternative
//  const arr = [1, 2, 3];

//  const a = (x) => console.log(x); // this is a arrow function (x) এখানে ব্রাকেট না দিলেও হতো ।

// arr.forEach(a)

// //system-2. forEach  উপরের সিস্টেম ১  এর মতো উত্তর হবে কোড কমে
// arr.forEach(x => console.log(x))

// //system-3 forEach  এখানে আমরা সবগুলো ফলের নাম  পেয়ে যাবো ।
// const fruits = ['mango', 'banana', 'chingo'];
// fruits.forEach(fruit => {
//     console.log(fruit)
// })

// system-4 forEach দিয়ে যোগ করা
// const arr = [1, 2, 3];

// let sum = 0;

// arr.forEach(item => {
//     sum += item;  // sum = sum + item;
// })

// console.log(sum)

// **** map use
// const arr = [1, 2, 3];

// let sum = 0;

// arr.map((item) => {
//   sum += item; // sum = sum + item;
// });

// console.log(sum);

// forEach
// const result = arr.forEach((item) => item);
// console.log(result); // এখানে রেজাল্ট undefined রেজাল্ট আসবে ।

// map // এখানে রেজাল্ট হিসেবে উপরের যে অ্যারে টা ছিলো ওটাই নিয়ে আসবে এটা কিন্তু forEach এ undefined হবে ।
// const result1 = arr.map((item) => item)
// console.log(result1)

// এইখানে বুঝিনি ****************************************************
// const fruits = ['Mango', 'graps', 'banana'];
// fruits.forEach((item, index, arr) => console.log(item, index, arr))

//1. find method
// const fruits = ['Mango', 'graps', 'banana'];
// const find = (fruits) => {
//     for(let fruit of fruits) {
//         if(fruit === 'graps')
//         return fruit
//     }
//     return null
// }

// const x = find(fruits);
// console.log(x)

//2. ES6  find mathod // উপরের কাজটা ES6 দিয়ে করার সিস্টেম । 
// *** find হলো ১ প্যারামিটার রিটার্ন করে  //
// const fruits = ["Mango", "graps", "banana"];
// const y = fruits.find((fruit) => fruit === 'graps')
// console.log(y)

//1. filter  দিয়ে জোড় সংখ্যা বের করা । সাধারণ সিস্টেমে মানি ES5 সিস্টেমে ।
// *** filter যতগুলো প্যারমিটার মিল পাবে রিটার্ন করে দিবে
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const filter = numbers => {
//     const result = [];

//     for(let number of numbers) {
//         if(number%2 === 0){
//             result.push(number)
//         }
//     }
//     return result;
// }

// const x = filter(numbers);
// console.log(x)

// 2. filter ES6 অ্যাপলাই করে বের করা
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const y = numbers.filter((number) => number%2 === 0 );
// console.log(y)

// *** find হলো ১ প্যারামিটার রিটার্ন করে  //
// *** filter যতগুলো প্যারমিটার মিল পাবে রিটার্ন করে দিবে



// reduce দিয়ে যোগ করা হলো । 
// const arr = [1, 2, 3, 4, 5];

// /*
// //  previous + current  = result 
//  0 + 1 = 1
//  1 + 2 = 3
//  3 + 3 = 6
//  6 + 4 = 10
//  10 + 5 = 15
 
// */

// const sum = arr.reduce((previous, current) => previous + current, 0)
// এখানে চাইলে ৫০  এর সাথে যোগ করতে পারবো 
// const sum = arr.reduce((previous, current) => previous + current, 50)
// console.log(sum)



// reduce  দিয়ে গুন করার সিস্টেম । 
const arr = [1, 2, 3, 4, 5];
/*
//  previous + current  = result 
1  * 1 = 1
1  * 2 = 2
2  * 3 = 6
6  * 4 = 24
24 * 5 = 120

*/

const mult = arr.reduce((previous, current) => previous * current);
console.log(mult)

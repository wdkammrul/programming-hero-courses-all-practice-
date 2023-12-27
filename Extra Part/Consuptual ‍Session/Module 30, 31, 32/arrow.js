// 1. ES5 function
// function add(x, y) {
//   const result = x + y;
//   return result;
// }

// // arrow function 
// const add = (x,y) => {
//   const result = x + y;
//     return result;
// }


//  arrow function এ  যদি {} ইউজ করা হয়  তাহলে রিটান লিখতে হবে  
// const add = (x, y) => {
//     // return x + y;
// }


// arrow function এই হলো অ্যারে ফাংশন। 
const add = (x, y) => x + y;



// ******  যদি প্যারামিটার ১ টা থাকে তাহলে (x) এরকমের না লিখে x লিখলেও হবে ।            
const showNumber = x => console.log(x)
showNumber(30)

console.log(add(2, 7));

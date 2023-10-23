// System-1
// ‍ Es5 সিস্টেমে ফাংশন declaration
// function add(a, b){
//     const result = a + b;
//     return result;
// }

// System-2
// আমি চাইলে রেজাল্ট লাইনটা বাদ দিয়ে দিয়ে সরাসরি a + b কে কল করে দিতে পারি
// function add(a, b){
//     return a + b;
// }

// System-3
// function expression
// const add2 = function(a, b){
//     return a + b;
// }

// System-4 ARROW FUNCTION
const add3 = (a, b) => a + b;

// একাধিক প্যারামিটার যদি হয় তাহলেও অ্যারো ফাংশন অ্যাপলাই করা যাবে 
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

// গুনও করা যাবে ।
const multiply = (num1, num2) => num1 * num2;

const mult = multiply(4, 3);
console.log(mult)

const sum = add4(1, 2, 3, 4);
// const sum = add3(5, 80);
console.log(sum);

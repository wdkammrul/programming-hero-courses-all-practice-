var numbers = [45, 68, 78, 56, 89, 98];

// 1. get Element by index 
var element = numbers[1];
// console.log(element);

// নতুনভাবে একটা সংখ্যা যদি পাল্টিয়ে সেট করতে চাই তাহলে এভাবে লিখবো 
// 2. set element value by index 
numbers[1] = 77;
numbers[3] = 44;
// console.log(numbers);


// 3. find index of an element 
// আমি চাচ্ছি একটা সংখ্যাকে খুজে বের করতে কিন্তু সংখ্যাটার ইনডেক্স জানি না নিচের ভাবে বের করবো । 
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);
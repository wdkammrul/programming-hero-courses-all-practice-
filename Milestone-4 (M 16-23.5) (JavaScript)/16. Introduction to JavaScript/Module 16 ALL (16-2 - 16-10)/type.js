// নিচের যে প্রাইস ১০০ দেয়া আছে এটা কি টাইপ নম্বর না স্ট্রিং তা পরিক্ষা করার জন্য typeof ব্যবহার করে পরিক্ষা করা যায় ।
// number type 
var price = 100;
// console.log(typeof price);


// string type 
var price = '100';
// console.log(typeof price);


// boolean type 
var isHappy = true;
// console.log(typeof isHappy);


// undefined type 
var romantic;
// console.log(typeof romantic);


// এখানে এই বিষয়টা হচ্ছে জাভাস্ক্রিপ্টের একটা সমস্যা কারন ০.১ + ০.২ যোগ করলে সম্পূর্ন সংখ্যাটাই দেখায় । এটাকে আমরা ফিক্সড করে দিতে পারি । 
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
console.log(sum);

// অন্যান্য ল্যাঙ্গুয়েজে কোনো কোড লেখার জন্য স্টাটিক টাইপ অ্যাপিলািই করা হয় । যেমন:
// int a = 4;
// string b = 'kamrul islam';
// bool c = True;
// object student = {name: 'kamrul', id: 44};
// int[] numbers = [12, 44, 56];
// string[] friends = ['abul', 'babul'];

//JavaScript is a dynamic type programming language

//primitive type 
const a = 4;
const b = "kamrul islam";
const c = true;

// non-primitive type
const age = [12, 33, 44];
const student = { id: 23, class: 7 };

// console.log(typeof a, typeof b, typeof c, typeof age, typeof student)

// primitive types datatype     
let x = 5;
let y = x;
console.log(x, y); // 5 5
y = 7;
console.log(x, y); // 5 7 

// non-primitive type datatype     
let p = {job: 'web developer'};
let q = p;
q.job = 'front end developer';
console.log(p, q); // { job: 'front end developer' } { job: 'front end developer' }


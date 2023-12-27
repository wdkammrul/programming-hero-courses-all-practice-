// 1.
// const add = (a, b) => a + b;
// console.log(add(4, 3));



// 2
// const add1 = (a, b) => a + b;
// console.log(add1(4));



// default paramiter set
// const add = (a =0, b=0) => a + b;
// console.log(add(4, 3)); //result asbe



// default paramiter set একটা প্যারামিটার মিস করলে
const add = (a = 0, b = 0) => a + b;
console.log(add(4)); //result asbe 4  নান আসবে না আর ।




// default paramiter হিসেবে সংখ্যা যোগ
const sum = (x = 30, y = 40) => x + y;
console.log(sum(2));

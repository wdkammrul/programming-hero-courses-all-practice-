// সবচেয়ে বড় সংখ্যাটা বের করার সিস্টেম 
const max = Math.max(3, 4, 76, 23, 54, 23, 543, 23, 5, 34);

// ** যদি কোনো অ্যারের মধ্যে থেকে বড় সংখ্যাটা বের করতে চাই তাহলে ... ব্যবহার করে বের করতে হবে ।
const numbers = [4, 76, 23, 54, 23, 543, 23, 5];
const arrayMax = Math.max(...numbers)
console.log(...numbers)

console.log(arrayMax);


// use spread operator to copy 
const friends = [4, 5, 85, 32];
const bondhu = friends;
const dosto = [...friends];
friends.push(100)
console.log(dosto)
console.log(friends)
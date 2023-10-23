/*
// undefined আমরা দেখবো কতভাবে আমরা আনডিফাইন্ড দেখতে পারি  
1. variable that is not initialized will give undefined 
2. function will no return  
3. parameter that is noet passed will be undefined 
4. if return has nothing on the right side will return undefined 
5. property that doesn't exists on an object will give you undefined 
6. accessing array elements outside of the index range
7. deleting an element inside an array 
8. set a value directly to undefined

10. typeof undefined
11. typeof null 
*/

// 1. variable that is not initialized will give undefined
let first;
console.log(first); // undefined

// 2. function will no return
function second(a, b) {
  const total = a + b;
}
const result = second;
console.log(result); // undefined;

// 3. parameter that is noet passed will be undefined 
function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);  
}

// উপরে প্যারামিটার নিলাম ৪ টা কিন্তু কল করলাম ২ টা বাকি ২টা আনডিফাইন্ড আসবে । 
third(2, 4); // 2 4 undefined undefined


// 4. if return has nothing on the right side will return undefined 
function noNegative(a, b) {
    if(a < 0 || b < 0){
        return // "যদি return এর ডান পাশে কিছু না থাকে তাহলে return undefined।
    }
    return a + b;
}


// 5. property that doesn't exists on an object will give you undefined  "একটি অবজেক্টে যে প্রপার্টি নেই, সেটি আপনাকে undefined দেবে
const total = noNegative(2, -5);
console.log(total) // "যদি return এর ডান পাশে কিছু না থাকে তাহলে return undefined।

const fifth = {id: 2, name: 'kamrul', age: 23};
console.log(fifth.age, fifth.salary) //undefined because slary doesn't exist



// 6. accessing array elements outside of the index range এখানে তো অ্যারে ইনডেক্স ৪৪ নেই তাই আনডিফাইন্ড দেখাবে 
const sixth = [3, 44, 555, 6, 66, 88, 44];
console.log(sixth[1], sixth[4], sixth[44])


// 7. deleting an elements inside an array 
const seven = [4, 454, 656, 7665, 34, 65, 3];
// you should not do it. istead use splice 
delete seven[1];
console.log(seven[1], seven[3], seven[200]);
console.log(seven)


// 8. set a value directly to undefined
const eight = undefined ;
console.log('this is eight',eight)


// 9. 
const ninth = null;
const data = {results: [], updated: null}
console.log(data)


// 10. typeof undefined
console.log(typeof undefined);

// 11. typeof null 
console.log(typeof null)












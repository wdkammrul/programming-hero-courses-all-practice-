// ** var এর দিন শেষ let & const এর বাংলাদেশ ।
// var x = 'world';
// console.log(x);

// 1. LET 
// let x = 'hello';
// console.log(x);


// 2. CONST 
// const name = 'Mahedy';
// // আমি দেখবো যে মেহেদি নামের মধ্যে li আছে কিনা
// const result = name.includes('li');
// console.log(result);


// 3. ARRAY NAME SEARCH 
// const pets = ['cat', 'dog', 'rat'];
// const result = pets.includes('horse');
// console.log(result);


// 4. ARRAY SLICE 
// const kamrul = ['ant', 'camel', 'duck', 'elephant', 'cat', 'god'];
// // উপর থেকে ২ ইনডেক্স থেকে নাম কেটে নিবে একেবারে লাস্ট পর‌্যন্ত যাবে 
// console.log(kamrul.slice(2));

// // আমি চাইলে ২-৪ পর‌্যন্ত সংখ্যা নিতে পারি slice = কেটে নেয়া 
// console.log(kamrul.slice(2,4));



// এখান থেকে বুঝিনি *****************************************************
// 5. ARRAY SPLICE এখানে ২ নম্বর ইনডেক্স ডাক কে বাদ দিবে । (২,১) মানি হলো duck এর আগে থেকে ১ টা ইনডেক্স কে বাদ দিবে 
// const kamrul = ['ant', 'camel', 'duck', 'elephant', 'cat', 'god'];
// const result = kamrul.splice(2,1);

// আমি চাইলে সেম স্টাইলে একটা ইনডেক্স যোগ করতে পারি 
// const add = kamrul.splice(2,0,'rat');
// console.log(add);





// // 6. OBJECT 
// const person = {
//     name: 'Kamrul',
//     age: 23,
//     address: 'Dhaka',
//     phone: '0171000000'
// }

// console.log(person);
// // আমি চাইলে আলাদা একটা key বের করতে পারি কামরুলের বয়স বের করি ২(dot notation, bracket notation);
// console.log(person.age);
// console.log(person['age']);

// // চাইলে সেম জিনিসটা  আমি এভাবে বের করতে পারি আলাদা কন্স ব্যবহার করে ।
// const x = 'address';
// console.log(person[x]);


// // ** আমি চাইলে শুধু keys গুলোকে আলাদা ভাবে বের করতে পারি 
// const keys = Object.keys(person);
// console.log(keys);

// // ** আমি চাইলে শুধু values গুলোকে আলাদা ভাবে বের করতে পারি 
// const values = Object.values(person);
// console.log(values);


// এখান থেকে বুঝিনি *****************************************************
// for(let i=0; i<keys.length; i++){
//     const key = keys[i];
//     console.log(person[key])
// }




// const person = {
//     name: 'Kamrul',
//     age: 23,
//     address: 'Dhaka',
//     phone: '0171000000'
// }

// এখান থেকে বুঝিনি *****************************************************
// this is for in loop 
// for(let i in person){
//     console.log(i);
//     console.log(person[i]);
// }



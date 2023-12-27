// নিচের ৬ টা বিষয় ১০০% জানতেই হবে  । দেখো এখানে ভেঙ্গে ভেঙ্গে আলোচনা করা আছে । কনসল লগ মেরে দেখো । 
// 1. How to declare a variable using let and const
// 2. CONDITION
// 3. ARRAY 
// 4. LOOP  (for loop & while loop)
// 5. Function 
// 6. OBJECT 



// 1. How to declare a variable using let and const
// কোনো একটা নাম চেন্জ না হলে কনস দিয়ে ডিকলার করবো 
const fatherName = 'Kamal Hossen';  

// কোনো একটা নাম চেন্জ হলে লেট দিয়ে ডিকলার করবো 
let season = 'rainy';     
season = 'winter';




// 2. CONDITION
// 6 basic condition  >, <, ===, !==, <=, >=   // এই ৬টা কন্ডিশন জানতে হবে । 
// multiple condition: && (দুইটা সর্তই সত্যি হতে হবে), || ( দুইটা সর্তের একটা সত্য হলেই হবে)

if(fatherName === 'Kamal Hossen' && season === 'rainy') {
    console.log('hmmmmm')
}

else if(fatherName === 'Kamal Hssen'){
  console.log('yes ami Kamal Hossen ELSE IF')
}

else{
   console.log('SORRY')
}


// 3. ARRAY 
// index টা বুঝতে হবে (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
// length ( অ্যারের মধ্যে কয়টা ইলিমেন্ট আছে তা বের করা জানতে হবে )
// push অ্যারের ভিতরে কোনো ইলিমেন্ট যোগ করা । pop (কোনো ইলিমেন্ট বাট দেয়া জানতে হবে। )

const numbers = [89, 35, 98, 12];
let count = numbers.length;
numbers[0] = 34; // index দিয়ে অ্যারের মান পরিবর্তনটা জানতে হবে 
console.log(numbers, count)



// 4. LOOP  (for loop & while loop)
for (let i = 0; i<numbers.length; i++){
   const number = numbers[i]
   console.log(number)
}


// 5. Function 
function sum(num1, num2) {
   const result = num1 + num2;
   return result;
}

const output = sum(2, 3)
console.log(output)
 


// 6. OBJECT 
const student = {
  name: 'Kamrul Islam', 
  age: '24',
  adress: ['dhaka', 'bangladesh']
}

// 3 ways to access property by name  ৩ ভাবে উপরের প্রপার্টিগুলোর নাম বের করতে পারি । 
console.log(student.age)  // 1. direct by property 
console.log(student['age']) // 2. access via property name string 

const myVariable = 'age';
console.log(student[myVariable])  // 3.একটা ভেরিয়াবেল থাকবে এর মাধ্যমে নামটা পাবো । 
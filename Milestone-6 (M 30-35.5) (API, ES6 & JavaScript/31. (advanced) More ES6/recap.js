/*
1. var let const 
2. default parameter 
3. tamplate string 
4. arrow function
5. destructuring and Spread operator 
6. Object.keys, Object.values, Object.entries
7. for of used in array and string
8. for in loop used in object 

*/

// 3. template String  দিয়ে মাল্টিলাইন তৈরি ।
const a = 56;
const numbers = [56, 4, 5]
const person = {
    name: 'Kamrul Islam'
}

const message = `Hi, ${person.name} your age ${a} and your sister age ${numbers[2]} ?`
console.log(message)


// 4. arrow function
const square = (x) => x * x;
const sum = (a, b) => a + b;

// 5. destructuring and Spread operator অবজেক্ট ডিসট্রাকচারিং  করতে উভয় পাশে {} ডিসট্রাকচার দিয়ে করতে হয় ।
const {age, z, ...others} = {x: 2, y: 4, z:4, name: 'kamrul', age: 22}
// console.log(age, z)


// অ্যারে ডিসট্রাকচারিং  করতে উভয় পাশে [] ডিসট্রাকচার দিয়ে করতে হয় ।
const [first, second, ...remaining] = ['kamrul', 'najmul', 'arif', 'bappi']
console.log(first, second, ...remaining)  





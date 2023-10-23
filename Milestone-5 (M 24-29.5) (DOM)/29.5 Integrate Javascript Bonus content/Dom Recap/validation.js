const number = '23';
// String, number, Boolean 
if(typeof number === 'number'){
    console.log('value is a number');
}else{
    console.log('value is not a number')
}


// *** ARRAY CHECK 
const numbers = [3, 12, 78, 90];
console.log(Array.isArray(numbers));


// Object CHECK 
const student = {name: 'Kamrul islam', job:'student'}
console.log(typeof student)


// এখানে এটা একটু বোঝার বিষয় যদি সংখ্যা হয় তাহলে flase রেজাল্ট্ আসবে কারন ২ তো সংখ্যাই । আবার যদি একটা স্ট্রিং দেয়া হয় তাহলে true দেখাবে কার স্ট্রিং তো আর নম্বর না । 
console.log(isNaN('2'));
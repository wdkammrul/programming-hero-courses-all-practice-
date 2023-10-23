const user = {id: 1, name: 'Kamrul Islam', job: 'Developer'};
//JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified) 
/*
1. js
{ id: 1, name: 'Kamrul Islam', job: 'Developer' }
2. json
{"id":1,"name":"Kamrul Islam","job":"Developer"}
*/

const shop = {
    owner: 'Kamrul', 
    address: {
        street: 'Dohar',
        city: 'Dhaka',
        country: 'BD'
    },
    products: ['laptop', 'mouse', 'pc', 'keybord'],
    revenue: 43000,
    isOpen: true,
    isNew: false
}

console.log(shop)
// জাভাস্ক্রিপে্টর কোনো ভেলুকে স্ট্রিংয়ে কনভার্ট করার জন্য নিচের লাইনটা । । 
const shopJSON = JSON.stringify(shop)
console.log(shopJSON) // এটা একটা স্ট্রিং হয়ে গেছে । 

// উপরের স্ট্রিংটাকে আবার অবজেক্টে এভাবে রুপান্তর করতে JSON.parse ব্যবহার করে করতে পারবো 
const shopObj = JSON.parse(shopJSON)
console.log(shopObj)






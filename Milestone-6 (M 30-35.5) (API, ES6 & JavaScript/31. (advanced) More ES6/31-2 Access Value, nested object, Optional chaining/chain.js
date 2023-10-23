// data access
// const data = [{id: 1, name: 'kamrul', address: 'segunbagicha'}]
// console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "hp laptop", price: 30000 },
    { id: 2, name: "mac book", price: 340000 },
  ],
};

// // second product price
// console.log(products.data[1].price)



// second info edu ber kora 
const students = {
  all: 444,
  info: [
    { id: 1, name: "kapsul", age: 23, home: "ruhita", edu: "primary s" },
    { id: 1, name: "sohel", age: 33, home: "haritana", edu: "high s" },
  ],
};
console.log(students.info[1].edu);


// নিচের 32/segunbagicha টাকে যদি আমি পেতে চাই তাহলে যা করবো 
const user = { 
   id: 4001, 
   name: 'kamrul ilsam',
   address: {
        street: {
            first: '32/4 uttora',
            // second: '32/segunbagicha',
            third: 'barisal'
        }, 
        city: 'Dhaka'
   }
}
// এখানে কন্টাক্ট নাম নেই কিভাবে পাবে এজন্য পাওয়ার জন্য ? চিহ্ন ব্যবহার করতে হবে তাহলে ইরোর দিবে না  একেই বলে অপশনাল চেইনিং । ইরোর না দিয়ে আমাকে আনডিফাইন্ড দিয়ে দিবে ।
console.log(user.address.street?.second)
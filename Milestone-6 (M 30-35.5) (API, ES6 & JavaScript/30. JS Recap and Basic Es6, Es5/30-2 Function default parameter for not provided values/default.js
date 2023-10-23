// dafault = যদি ভেলু প্রভাইড করা না হয় তাহলে পরবর্তি ভেলু যেটা ডিফল্ট দেয়া আছে সেটা রেজাল্ট হিসেবে দেখাবে 
// *** সংখ্যার ক্ষেত্রে ডিফল্ট মান ০, ১ দেয়া হয় । 
function add(num1 = 0, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result)

    return result;
}
// এটা যোগ হয়ে যাবে 
// const sum = add(5, 7);

// এখানে একটার মান নাই তাই undefined দেখাবে এবং যোগফল আসবে NaN । ডিফিল্ট মান যোগ করার পরে প্রথম ভেলুটা পেলে পরবর্তি ভেলুটাকে 0 নিয়ে নিবে । কারন ভেলু দেয়নি ডিফল্ট হিসেবে ০ দিয়ে দিবে।
// const sum = add(7);

// এখানে কিছু না দিলে রেজাল্ট undefined দেখাবে । ডিফল্ট ভেলু বসানোর পরে পরে ভেলুটা ০ দেখিয়ে রেজাল্ট দিয়ে দিবে । 
const sum = add();



// ডিফল্ট যদি স্ট্রিং পাঠাতে হয় তাহলে  এমটি স্ট্রিং পাঠাতে হয় 
function fullName(first, last =''){
    const full = first + ' ' + last;
    return full; 
}


// ডিফল্ট হিসেবে যদি অ্যারে নিতে হয় তাহলে নিবো এমটি অ্যারে 
function friends(numbs = []){

}

// ডিফল্ট হিসেবে যদি অবজেক্ট নিতে হয় তাহলে নিবো এমটি অবজেক্ট 
function person(numbs = {}){
    
}
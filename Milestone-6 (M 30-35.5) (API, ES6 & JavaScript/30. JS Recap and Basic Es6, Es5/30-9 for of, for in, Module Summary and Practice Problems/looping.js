// **** for of use on array or string not in object (for of অ্যারে ও স্ট্রিংয়ে ব্যবহার করা যাবে কিন্তু অবজেক্টে কাজ করবে না )

// **** for in us on object (for in শুধু অবজেক্টে কাজ করবে )
// বিস্তারিত নিচে উদাহরণ দেয়া 


const numbers1 = [1, 3, 5, 7];
// for (let i = 0; i < numbers.length; i++) {} //এটা তেমন ইউজ করবো নাহ
// while // এটাও তেমন ইউজ করবো না ।

const numbers2 = [1, 3, 5, 7];
// for of   // এটা ইউজ করবো  আমরা for of কে অ্যারের উপরে চালাতে পারি ।
for (const num of numbers2) {
  console.log(num);
}

const nobab = "Siraj Ud Doula";
// for of   // এটা ইউজ করবো  আমরা for of কে string ar উপরে চালাতে পারি ।
for (const char of nobab) {
  console.log(char);
}

const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

// Object এর ক্ষেত্রে for of কাজ করবে না এর পরিবর্তে for in ব্যবহার করতে হবে ।
// for(const key of glass){
//     console.log(key)
// }



// Object এর ক্ষেত্রে for of কাজ করবে না এর পরিবর্তে for in ব্যবহার করতে হবে ।
for (const key in glass) {
  const value = glass[key];
  console.log(key, value);
}

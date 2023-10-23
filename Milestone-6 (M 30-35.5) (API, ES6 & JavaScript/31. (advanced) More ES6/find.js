// find যদি একাধিন প্যারামিটার আছে শর্ত মানলে ১ টাকেই দিবে যদি একাধিক সংখ্যা শর্তের সাথে মিলে যায় তাহলেও শুধু ১ম টা রেজাল্ট দিবে । যদি  একটাও না পাওয়া যায় undefined দেখাবে । 
const players = [51, 42, 56, 67, 58];

// const selected = players.find(player => player > 50); // 51 
// const selected = players.find(player => player > 30); // 51 
const selected = players.find(player => player > 100); // undefined

console.log(selected)



















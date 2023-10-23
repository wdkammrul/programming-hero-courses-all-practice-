// slice এর একটু বিপরীত হলো splice 
// splice কোনো একটা ইলিমেন্টের ভিতর থেকে index একেবারে রিমোভ করতে পারে আবার চাইলে index add ও করতে পারে । 

const friends = [13, 12, 45, 55, 66, 44, 25, 22];


// একটু খেয়াল করো এখানে ২ নং index থেকে ৪ নম্বর index পর‌্যন্ত কেটে নিয়ে আসবে একেবারেই কেটে নিয়ে আসলো । নিচের friends console টা দেখো কেটে নেয়ার পরে  বাকিটা দেখাবে  । 
const partial = friends.splice(2, 4);
console.log(partial);


console.log(friends);






// // ADVANCED PART = এটা অ্যাডভান্স শিখার জন্য 

// const friends = [13, 12, 45, 55, 66, 44, 25, 22];


// // একটু খেয়াল করো এখানে ২ নং index থেকে ৪ নম্বর index পর‌্যন্ত কেটে নিয়ে আসবে একেবারেই কেটে নিয়ে আসলো । নিচের friends console টা দেখো কেটে নেয়ার পরে  বাকিটা দেখাবে  । 
// // ADVANCED PART  এখানে ২-৪ পর‌্যন্ত কেটে নিছে এবং এই একই স্থানে ৪৪৪, ৬৬৬, ৭৭৭, ৭৮৮ যোগ  করে দেয়া হয়েছে ।
// const partial = friends.splice(2, 4, 444, 666, 777, 788);
// // console.log(partial);

// console.log(friends);


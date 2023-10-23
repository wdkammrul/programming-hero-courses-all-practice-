/* 
while loop লিখতে ৪ টা জিনিসের দিকে খেয়াল রাখতে হয় । 
1. Loop variable একটা ভেরিয়াবেল থাকবে 
2. condition inside while(হোয়াইলের একেবারে পাশেই একটা কন্ডিশন দিতে হবে)
3. Loop body লুপ যে কাজ করবে তার নির্দেশ 
4. Change the loop variable (ভেরিয়াবেলের মান বাড়তে ও কমতে পারে) 
*/

// while loop একই কাজ বার বার করে যতক্ষন সর্ত সত্য হতে থাকবে ।
//  while এর কাজ হচ্ছে যতক্ষন কন্ডিশন সত্য হবে ততক্ষন কাজ করতে থাকবে যখন সর্ত শেষ হবে তখন থেমে যাবে । এখনে রোস্ট আছে ০ টা । পরে ওয়াইল এর ভিতরে ৭ এর ছোট ০ মানি সত্য । সে কাউন্ট হবে ৭ বার । আর নিচে ১ যোগ করা হয়েছে প্রতিবার ১ করে যোগ হয়ে কাজ হবে । 
var roastGiven = 0;
while(roastGiven < 7){
    console.log('Roast Den, Please !!')
    console.log(roastGiven);
    // roastGiven = roastGiven + 1
    // roastGiven += 1
    roastGiven++
}







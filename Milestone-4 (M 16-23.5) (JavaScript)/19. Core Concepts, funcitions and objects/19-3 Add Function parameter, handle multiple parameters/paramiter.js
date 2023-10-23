// NaN = Not A Number 

// 1. 
function bringSingara(money){
    console.log('taka disen', money)
    console.log('ai nen singara');
}

// চাইলে আলাদা বার ব্যবহার করেও রেজাল্ট বের করতে পারবো 
var taka = 300;
bringSingara(taka);


// 2. চাইলে ফাংশন ব্যবহার করে একাধিক প্যারামিটারের মান বের করা যাবে 
function add(num1, num2) {
    console.log('going to add', num1, num2);
}

add(125, 96);



// 3. একাধিক প্যারামিটার নিয়ে আরেকটা উদাহরণ দেখি 
function sum(a, b, c, d, e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}

// উপরে a-e ৫টা ওয়ার্ড লিখেছি কিন্তু কল করেছি ৪টা নম্বর ৪টা নম্বর ফলাফল আসবে বাকি লাস্টেরটা undefined আসবে কারন আমি ৫নম্বরকে কল করিনি 
sum(1, 2, 3, 4)


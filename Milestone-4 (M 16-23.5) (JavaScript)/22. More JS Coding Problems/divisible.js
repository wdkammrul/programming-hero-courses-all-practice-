/*
 1. show output from: 1-50 একটা সংখ্যা ১-৫০ পর‌্যন্ত দেখাতে হবে 
 2. if the number is divisible by 3 then instead of the number, show 'foo' (যদি একটা নম্বর ৩ দ্বারা ভাগ যায় তাহলে ওই সংখ্যাটা না দেখিয়ে দেখাবো foo)
 3. if the number is divisible by 5 then instead of the number, show 'bar' (যদি একটা নম্বর 5 দ্বারা ভাগ যায় তাহলে ওই সংখ্যাটা না দেখিয়ে দেখাবো foobar)
 4. if the number is divisible by both 3 and 5 then instead of the number, show 'foo' (যদি একটা নম্বর ৩ ও ৫ উভর সংখ্যা দ্বারা ভাগ যায় তাহলে ওই সংখ্যাটা না দেখিয়ে দেখাবো foobar)
*/ 

for(let i = 1; i<=50; i++){
    // এখানে সংখ্যাকে ৩ এবং ৫ উভয় সংখ্যা দ্বারা ভাগ করা যাবে 
    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    if(i % 3 === 0){
        console.log('foo');
    }else if(i % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
}
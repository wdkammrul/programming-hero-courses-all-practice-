// practice-1
// for (var i = 0; i < 20; i++){
//     console.log(i);

//     // আমরা চাইলে উপরের লুপটা পর‌্যন্ত চলতো এটাকে মাঝে থামিয়ে দিতে পারি । যেহেতু ব্রেক ৫ দিলাম ব্রেক ৬ এ গিয়ে থেমে যাবে । যতক্ষন ব্রেকের সর্ত ঠিক থাকবে না ততক্ষন ফরলুপ চলতেই থাকবে যেই মাত্র ব্রেকের সর্ত মিলে যাবে সত্য হবে তখনই কোড থেমে যাবে । 
//     if(i > 5){
//         break;
//     }
// }

// practice-2
// উপরের ফরের কাজটা চাইলে while এও গুড ভাবে চলবে 
// এখানে লুপটা ৫ বার কাজ করবে যেই মাত্র ব্রেকের সর্ত অর্থাৎ ৪ এর বেশি ৫ হয়ে যাবে এই থেমে যাবে 
// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log('Roast Den, gift item ansi');
//     roastGiven++;
//     if(roastGiven > 4){
//         break;
//     }
// }



// practice-3
// var items = ['bottle', 'mouse', 'sunglass', 'pen', 'fan', 'table']
// for(var i = 0; i < items.length; i++){
//     var item = items[i];

//     // আমি এখানে বলে  দিতে পারি যদি আইটেমের নাম কলম হয় তাহলে সাথে সাথে ব্রেক মেরে দাও 
//     if(item == 'pen'){
//         break;
//     }
//     console.log(item);
// }



// practice-4
var numbers = [45, 87, 89, 56, 32, 51, 100, 120, 25, 44, 55 ];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];

    // আমি এখানে চাচ্ছি যদি সংখ্যাগুলোর মান ১০০ এর বেশি হয় তাহলে তুমি ব্রেক মেরে দাও মানি যেই তুমি ১০০ এর উপরে সংখ্যা পাবে আর চলবে না 
    if(number > 100){
        break;
    }
    console.log(number);
}
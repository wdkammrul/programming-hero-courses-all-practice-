// সাধারন ফর লুপ চালানো  আগের ভিডিওটা রিভাইস করলাম 
// for(var i = 0; i < 10; i++){
//     console.log("hello for loop kuk");
// }


// target : display every elements of an array (অ্যারের মধ্যে সব অ্যালিমেন্টগুলো দেখাতে চাই )
// বাংলা সিস্টেম 

// var numbers = [45, 87, 89, 56, 32, 51, 25, 44, 55];

// // 1. এখানে আমরা খেয়াল কি যে ৭ কে ফিক্সড করে দেয়া হয়েছে তাই যদি নাম্বার আরো বাড়ানো হয় যেমন ৪৪, ৫৫ আর দেখা যাবে না ।  তাহলে নতুন নম্বর আর যোগ হবে না এজন্য নিচের নিয়মটা 
// for(var i = 0; i < 7; i++){
//     var number = numbers[i];
//     console.log(number);
// }



var numbers = [45, 87, 89, 56, 32, 51, 25, 44, 55];

// 2. 1 এর নিয়মে দেখেছি যে ৪৪, ৫৫ যোগ হয়নি এবার হবে numbers.length
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
}


var items = ['bottle', 'mouse', 'sunglass', 'pen', 'fan', 'table']
// items.length এর মাধ্যমে এটা বুঝায় যে অ্যারের মধ্যে যতগুলো উপাধান আছে সবকিছু দেখাও 
for(var i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item);
}


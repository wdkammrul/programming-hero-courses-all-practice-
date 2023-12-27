// // 1. এটা হলো পোস্ট ইনক্রিমেন্ট ১ বাড়বে ১০ থেকে ১১ হবে 
// var y = 10;
// console.log(++y);



// // 2. array  
// var arr = [10, 15, 20, 30];
// console.log(arr);


// 3. array মধ্যে কয়টা সংখ্যা বা নাম আছে তা দেখতে 
// var arr = [10, 15, 20, 30];
// console.log(arr.length);


// 4. ইনডেক্সের মান বের করতে 3 নম্বর ইনডেক্সে আছে ৩০ । 
// var arr = [10, 15, 20, 30];
// console.log(arr[3]);


// 4. ইনডেক্সকে আলাদাভাবে দেখতে পারি 
// var arr = [10, 15, 20, 30];
// var num1 = arr[0];

// console.log(num1);


// 5. চাইলে নতুন নাম যোগ করতে  পারি 
// var name = ['kamrul', 'Islam']
// name.push('Shahadat');
// name.push('Bappy');

// console.log(name);


// // 5. চাইলে নতুন নাম যোগ করতে  পারি এখানে বাপ্পি নামটা চলে যাবে । কারন পপ করলে লাস্ট থেকে বাদ যাবে ।
// var name = ['kamrul', 'Islam', 'Shahadat', 'Bappy']
// name.pop();

// console.log(name);


// Condition 
// 6. আমরা if/else এর ব্যবহার করবো এটা ২টা সংখ্যার মধ্যে তুলনা । 

// var age = 25;

// if(age > 18){
//     console.log('you are adult');
// }else{
//     console.log('tumi adult na');
// }


// // 7. আমরা নম্বর গুলো দিয়ে কন্ডিশন করি 
// var mark = 57;

// if(mark > 80){
//     console.log('you got A+')
// }else if(mark > 70){
//     console.log('you got A')
// }else if(mark > 60){
//     console.log('you got B')
// }else if(mark > 50){
//     console.log('you got C')
// }else {
//     console.log('tumi fail')
// }


// // 8. আমরা তাপমাত্রা দিয়ে কন্ডিশন বের করবো 
// var temperature = 25;
// var isRaining = true;

// if(temperature > 30){
//    console.log('It is a hot day')
//    if(isRaining == true){
//     console.log('but it is raining')
//    }else{
//      console.log('and it is not raining')
//    }
// }else{
//     console.log('It is a cold day')
//     if(isRaining){
//         console.log('but it is raining')
//     }else{
//         console.log('and it is not raining')
//     }
// }


// // 9. cosditon check 
// var x = 5;

// if(x == 5){
//     console.log('equal to 5')
// }else{
//     console.log('not equal to 5')
// }



// 10. এখানে  && এর  ব্যবহার 
// var raining = true;
// var raining = true;

// if(raining == true && umbrella == true){
//     console.log('baire jabo')
// }else{
//     console.log('umbrella nai jabo na')
// }


// 11. এখানে অর এর ব্যবহার 
var raining = false;
var raining = false;

if(raining == false || umbrella == true){
    console.log('baire jabo')
}else{
    console.log('umbrella nai jabo na')
}


// // 9. LOOP এর ব্যবহার দেখি while and for loop একই ওয়ার্ড বার বার রিপিট করার জন্য লুপ ব্যবহার করা হয়। 

// var i = 1;

// while(i <= 10){
//     console.log('I am kamrul');
//     // i = i+1;
//     i++;
// }


// 10. for loop ব্যবহার করে আমরা হোয়াইল এর কাজ সেইম ভাবে চালাতে পারেন 
// for(var i = 1; i <= 10; i++){
//     console.log('I am for loop ami repeet kori')
// }

// 11. অ্যারের মধ্যে থেকে  ‍যদি কোনো ইনডেক্স বের করতে চাই তাহলে 
// var arr = [10, 20, 30, 40, 50];
// console.log(arr.indexOf(40));


// // 12. array এর মধ্যে কতগুলো ইনডেক্স আছে তা দেখতে 
// var arr = [10, 20, 30, 40, 50];
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }


// // 13 এখানে হোয়াইল ব্যবহার করেও আমি কতগুলো ইনডেক্স আছে তা  বের করতে পারি  
// var arr = [10, 20, 30, 40, 50];
// var i = 0;
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }


// 14. আমি এখানে লুপটাকে break করতে পারি 
// var arr = [10, 20, 30, 40, 50];
// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     if(arr[i] == 30){
//         break;
//     }
// }


// 15. এখানে continue ব্যবহার করবো এখানে ৩০ বাদে সবগুলো দেখা যাবে 
// var arr = [10, 20, 30, 40, 50];
// for (var i = 0; i < arr.length; i++){
//     if(arr[i] == 30){
//         continue;
//     }
//     console.log(arr[i])
// }



// // 16. Math +, -, *, / 
// var x = 50;
// var y = 5;

// console.log(x/y)


// এটা বুঝিনি বুঝিয়ে দিন 
// var x = 9;
// var y = 10;

// var remain = (x % y)

// console.log(remain)



// abul vai korbe, per bus 50, per car 11, badbaki jabe rikshwa per person 70 
var people = 176;
var peopleForCar = people % 50;
var peopleForRickshaw = peopleForCar % 11;

var totalVara = peopleForRickshaw * 70;
console.log(totalVara)


// 17. আমি চাচ্ছি যাতে আমার দশমিক সংখ্যা না থাকে 

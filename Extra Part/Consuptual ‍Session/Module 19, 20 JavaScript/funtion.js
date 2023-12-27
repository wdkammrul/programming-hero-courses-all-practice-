// একই কোড বার বার না লিখার জন্য function ব্যবহার করা হয় 

// 1.
//  function show(){
//     console.log('hellow world');
// }

// // উপরের ফাংশনটা কে কল করতেই হবে না হয় ওপেন হবে না 
// show();


// // 2. 
// function printInfo(name){
//     console.log('valo hoye jao', name);
// }

// const name = 'Masque Imam Masud';
// printInfo(name);

// printInfo('Imam Masud');
// printInfo('Masud');



// 3.  ADD FUNTION 
// function add(x, y){
//     // ভিতরে যাই লিখলাম এখানেই থাকবে বাহিরে যাবে না {} এর বাহিরে যাবে না ।
//     let total = x + y;
//     // console.log(total);
//     return total;
// }

// // এখানে ৩ x এর এবং ৪ y এর 
// console.log(add(3, 4));

// // উপরের সেম উত্তর এখানেও পাবো 
// const result = add(3, 4);
// console.log(result);






/*
// 4. 4 FUNTION SYTLES 
// ৪ ধরনের ফাংশন আছে আমরা একে একে সবগুলো দেখি 
1. no perameters, no return 
2. perameters + no return
3. no perameters with return
4. perameters with return 
*/

// // 1. no perameters, no return
// function show(){
//     console.log('hello')
// }


// // 2. perameters + no return 
// function add(x, y){
//     console.log(x + y);
// }

// // 3. no perameters + return 
// function giveMoney(){
//     const money = 500;
//     return money;
// }

// // 4. parameters with return 
// function multi(a,b){
//     const result = a+b;
//     return result;
// }



// 5. এখান থেকে বুঝিনি *************************************************************************
// function sumOfArrays(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// const total = sumOfArrays(nums);
// console.log(total);

// const nums = [1, 2, 3, 4, 5]
// sumOfArrays(nums);






// // 6. এখানে আমি ফাংশন বানাবো যেখানে শুধু বিজোড় সংখ্যার যোগ দেখাবে 

// function sumOfOdds(arr){
//     let sum = 0;
//     for(let item of arr){
//         if(item%2 ===1){
//             // sum = sum + arr[i];
//             sum += item;

//         }
//     }
//     return sum;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const total = sumOfOdds(numbers);
// console.log(total);




// // 7. এই নিচের লেখাটাকে আউটপুটে দেখাবো 
// // amar nam Kamrul, amar bari Barisal, amar bayos 22
// function information(info){
//     const sentente = 'amar nam '+info.name+', amar bari '+info.address+', amar boyos '+info.age;
//     // console.log(sentente);
//     return sentente;
// }

// const myInfo = {
//     name : 'Kamrul',
//     age: '56',
//     address: 'Barisal'
// }

// console.log(information(myInfo));



// 8. FACTORIAL 
// এখানে 5! মানে ৫-১ পর‌্যন্ত গুন হবে 
// 5! = 5*4*3*2*1 = 120 
// 0! = 1
// 1! = 1



// // 9. FACTORIAL VAR KORTA HOBE 
// const number = 5; 
// let result = 1;

// for(let i = number; i >= 1; i--){
//      result = result * i; 
// }

// console.log(result);



// এটা বুঝিনি *********************************************************************************
// 10. 9 এর সেম কাজটা আমরা ফাংশন দিয়ে বের করবো 
// function factorial(number){
//      if(number === 0 || number === 1){
//         return 1;
//      }

//      let result = 1;

//      for(let i = number; i >=1, i--){
//         result = result + 1;
//      }

//      return result;
// }


// console.log(factorial(5))
// console.log(factorial(0))






// 11. এখানে নিচের নম্বরগুলো থেকে সবচেয়ে বড় নম্বরটা বের করবো 
// function findLargest(x){ 
//     let largest = x[0];

//     for(let i = 1; i < x.length; i++){

//         const currentItem = x[i];

//         if(currentItem > largest){
//             largest = currentItem
//         }
//     }

//     return largest;
  
// }

// const arr = [5, 12, 7, 9, 20, 4, 2, 3]
// console.log(findLargest(arr));






// 12. এখানে বন্ধুদের সবচেয়ে বড় নামটা বের করবো 

function biggestFriend(friends){
    let biggest = friends[0];

    for(let i = 1; i < friends.length; i++){
        if(friends[i].length > biggest.length){
            biggest = friends[i]
        }
    }

    return biggest;
}


const friends = ['arif', 'rakib', 'saki', 'sunny', 'mosaddekbillah', 'babul']

console.log(biggestFriend(friends))
// String  তে তুলনা করার জন্য এই কোডগুলো 
const userName = 'blackPink';
const userInput = 'blackPinK'; //এখানে K বড় হাতের আছে 

// একটা ওয়ার্ডকে সব ছোটহাতের অক্ষর করার জন্য নিচের কোড 
// console.log(userName.toLowerCase());
// একটা ওয়ার্ডকে সব ছোটহাতের অক্ষর করার জন্য নিচের কোড 
// console.log(userName.toUpperCase());

// তুলনা করার সময় সংখ্যাগুলোকে ছোটহাতের অক্ষর করে নিতে হবে 
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}
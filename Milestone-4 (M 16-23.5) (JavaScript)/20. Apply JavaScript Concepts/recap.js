// Revision Module- 16, 17, 18, 19 

// 1. VARIABLES   
var myName = 'Kamrul';
// MATH OPERATION: +, -, *, /
// shortHand: +=, -=, *=, /=, ++, --


// 2. ARRAY: একটা ভেরিয়াবেলের ভিতরে অনেকগুলো মান থাকে 
var friends = ['abul', 'babul', 'cabul', 'dabul', 'ebul'];
// index: 0, 1, 2, 3, 4, 5 
// ** 3nd friends name search 
var thirdFriend = friends[2];

// ** fourth friend name change 
friends[3] = 'embul';


// 3. CONDITIONALS
// Symble: >, <, >=, <=, ==, ===, !=, !=== 
if(friends.length <2){
    console.log('fokir tormar kono friend nai');
}
else{
    console.log('tomar to onek friend');
}


// 4. LOOP: while/for
var number = 0;
while(number <= 6){
    console.log(number);
    number++;
}


for(var number = 0; number <= 10; number++){
    console.log(number);
}


// 5. FUNCTION 
function isMoonUp(time){
    if(time > 7){
        return true;
    }
}

// 6. OBJECT
var teachers = {
    height: 60,
    age: 40,
    home: 'Bangladesh'
}


// এগুলোর আলোচন ১৬-১৯ মডিউলে ছিলো 

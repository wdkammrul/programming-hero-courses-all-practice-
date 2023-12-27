// 1. truthy // 'almas', 5, true, {}, [], etc
// 2. falsy  // '', 0, false, null, undefiend


// check truthy 
let myVar = 5;
// check any truty 
if(myVar){
   myVar =  myVar * 3;
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything   
if(!myMoney){

}

console.log(myMoney)
console.log(myVar)



// 3.1 example 
const money = 40;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit';
}




// উপরের ৩ এর কাজটা আমি সর্টকার্টভাবে করতে পারি 
// 3.  ternary operator 
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
console.log(food1)


// 3. 
let drink = (money > 100  && myVar > 100) ? 'coke' : 'filter water';
console.log(drink)


// 4. Number to String convertion 
const num1 = 52; 
console.log(num1);
const numStr = num1 + '';
const type = typeof(numStr)
console.log(numStr, type);


// 5. String to number  
const input = '560';
const inputNum = +input;
console.log(inputNum)



// 6. truthy and falsy 
const isActive = false;
const showUser = () => console.log('show user');
const hideUser = () => console.log('hide user');
 isActive ? showUser() : hideUser();

//  use && if the left side is true then right side will be executed  
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();


// toggle boolean
// isActive = !isActive;+
69




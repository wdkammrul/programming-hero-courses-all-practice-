const actor = {
  name: "Sakib Khan",
  age: 30,
  phone: "01723589654",
  money: "56465465465",
};

// if right side is an object left side of destructuring will be object as well (যদি ডান পাশে একটা অবজেক্ট থাকে ডানপাশেও অবজেক্ট দিয়ে কনস করতে হবে )
// use property name as a variable that contains the property value
const { phone } = actor;

console.log(phone);    
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone); 
console.log(phone);
console.log(phone);

// array destrycturing
const numbers = [34, 55];
const [first, second] = numbers;
const [x, y] = [12, 44];


function doubleThem(a, b){
    return [a*2, b*2]
}

const [] = doubleThem(6, 9);
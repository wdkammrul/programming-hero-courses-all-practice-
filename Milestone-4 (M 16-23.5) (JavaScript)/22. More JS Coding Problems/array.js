// এখানে আমি কতগুলো মিক্স করে কোনটা কি টাইপের তা বের করবো
const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 132, class: 11, name: 'Rabiul'};

// ****এখানে যে যেই টাইপের তার ঠিকঠাক মতো typeof দিতে আসে কিন্তু ‍array type টা শুধু Object টাইপ নামে আসতেছে তাহলে array আমরা যেভাবে চেক করবো নিচে দেখি । 
const friends = [22, 34, 454, 55, 53, 30];

function add(num1, num2) {
    return num1 + num2;
}


// টাইপ বের করতেছি 
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

// ‍array check করার জন্য এই কোড লিখতে হবে  
console.log(Array.isArray(friends)); 

// array এর মধ্যে একটা সংখ্যা আছে কিনা তা চেক করার সিস্টেম যেহেতু ১৩ উপরে অ্যারে নাই তাই false আসবে ।
console.log(friends.includes(13));

// array এর মধ্যে একটা সংখ্যা আছে কিনা তা চেক করার সিস্টেম যেহেতু ৩৪ array তে আছে তাই এখানে রেজাল্ট true আসবে 
console.log(friends.includes(34));

console.log(typeof add);



// concat : দুইটা অ্যারেকে একসাথ করকে কনক্যাট বল হয় । 
const oldFriends = [22, 34, 454, 55, 53, 30];
const newFriends = [23, 22, 24, 25, 26];
const allFriends = newFriends.concat(oldFriends);
console.log(allFriends);

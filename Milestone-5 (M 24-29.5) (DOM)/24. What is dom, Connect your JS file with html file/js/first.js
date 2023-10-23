console.log('first file')

// 1. আমরা ‍যদি সবগুলো li কে দেখতে চাই তাহলে 
const allLi = document.getElementsByTagName('li');
console.log(allLi);


// 2. আমরা যদি সবগুলো সেকশনের টাইটেল একসাথে দেখতে চাই তাহলে 
const allTitles = document.getElementsByClassName('section-title')
console.log(allTitles);


// 3. আমরা যদি শুধু একটা সেকশনকে(2nd section) দেখতে বা স্টাইল করতে চাই তাহলে 
const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'white'
secondSection.style.backgroundColor = 'tomato'


// 4. document.querySelectorAll 
// 5. document.querySelector 
 

+
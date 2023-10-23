// synconous = সিনকোনাস সিরিয়াল অনুযায়ী চলে । উদাহরণস্বরুপ পিপড়ার মতো । 
// ‍asynconus = সিরিয়াল অনুযায়ী চলে না । 

console.log(1);
console.log(2);

// সাধারণ ফাংশন ঠিকভাবে সিরিয়াল অনুযায়ী চলে কিন্তু fetch & setTimeout এরা লাস্টে গিয়ে বসে মানি সিরিয়াললি বসে না 
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// এই ফাংশনটা ৪ সেকেন্ড পরে দেখাযাবে ।
setTimeout(() => {
  console.log("lazy showed");
}, 4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log(3);
}

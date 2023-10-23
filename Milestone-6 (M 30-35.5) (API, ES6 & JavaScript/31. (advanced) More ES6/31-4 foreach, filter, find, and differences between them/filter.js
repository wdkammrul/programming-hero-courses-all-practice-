// filter কোনো একটা শর্ত এপলাই করে অনেকগুলো জিনিসের মধ্যে থেকে  কিছু  জিনিস বাছাই করা । filter করলে যদি কিছুই না মিলে তাহলে [] অ্যারে দেখাবে । কোনো রকম ইরোর দিবে না ।
const players = [51, 42, 56, 67, 58];

// const selected = players.filter(p => p > 70); // []
// const selected = players.filter(p => p > 50); //[ 51, 56, 67, 58 ]
// const selected = players.filter(p => p % 2 === 1); // [ 51, 67 ] বিজোড় সংখ্যা দেখাবে ।
const selected = players.filter((p) => p % 2 === 0); // [ 42, 56, 58 ] জোড় সংখ্যা দেখাবে ।


 // এখানে ফিলটার ব্যবহার  করে ৪ সংখ্যার বেশি সংখ্যাওয়ালা নামকে দেখাবে
const friends = ["kamrul", "islam", "sahadat", "rifat", "razu", "rahman"];
const oddFriends = friends.filter((friend) => friend.length > 4);

console.log(oddFriends);
console.log(selected);

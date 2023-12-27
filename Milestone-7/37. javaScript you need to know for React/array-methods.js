// নিচের টপিকগুলো পারতেই হবে ।
// 1. map
// 2. forEach
// 3. filter
// 4. find



const products = [
  { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ribon", color: "black" },
  { name: "camera", price: 20000, brand: "ribon", color: "red" },
];

// 1. map এখানে উপর থেকে আইটেম নিয়ে একটা অ্যারের ভিতরে রেখে রেজাল্ট দিবে ।
const brands = products.map((product) => product.brand);
console.log(brands);

// 2. forEach
// single line
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

// multiline
products.forEach((product) => {});

// 3. filter এখানে একটা শর্ত দেয়া হবে যারা যারা পূরণ করবে তাদেরকেই অ্যারে হিসেবে আউটপুট দিবে ।
const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);

// specifinName এখানে যে প্রডাক্টগুলোর মধ্যে n আছে ওগুলো দিবে
const specifinName = products.filter((product) => product.name.includes("n"));
console.log(specifinName);

// 4. find  // এটায়ও একটা শর্ত দেয়া আছে তবে এখান থেকে শর্ত যেটার সাথে মিলবে যতগুলোর সাথেই মিল থাকুকনা কেন প্রথম  ইনডেক্টটা আউটপুট দিবে ।
const special = products.find((product) => product.name.includes("n"));
console.log(special);

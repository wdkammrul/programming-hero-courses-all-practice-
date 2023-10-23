function add(a, b){
  const total = a + b;
  console.log(a, b);
  if (b > 4) {
    const sum = 25 + a + b;
  }
  // ফাংশনের ভিতরের কিছুই বাহির কল হবে না ।
  console.log(sum);
  return total;
}

// ফাংশনের ভিতরের কিছুই বাহির কল হবে না । 
// console.log(a, b)
// console.log(total)
add(5, 7);
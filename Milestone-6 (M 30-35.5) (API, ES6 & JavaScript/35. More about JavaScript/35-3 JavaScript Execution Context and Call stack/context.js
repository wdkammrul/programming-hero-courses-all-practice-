// 1. global context = যেকোনো স্থান থেকে এই কনটেক্টকে ব্যবহার করা যায় 

// 2. functional context =  এটা শুধু ফাংশনের ভিতরে কাজ করবে ।



let a = 5;
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

const sum = add(1, 2);
console.log(sum)

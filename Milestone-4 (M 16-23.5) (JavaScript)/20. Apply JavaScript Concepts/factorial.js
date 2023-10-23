// এই সংখ্যাগুলো আমরা গুন করবো এবং গুনের  এই সিস্টেমটাকে একটু আলাদা করে  দেয়া হয়েছে 
// 1 * 2 * 3 * 4 * 5 * 6 * 7

function factorial(number) {
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(7);
console.log(result);


// FACTIORIAL 
// 3! = 3*2*1
// 4! = 4*3*2*1

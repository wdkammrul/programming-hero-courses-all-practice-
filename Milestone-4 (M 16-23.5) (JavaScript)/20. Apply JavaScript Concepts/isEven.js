// // 1. NORMAL SYSTEM Even Number (জোড় সংখ্যা)
// console.log(4/2);
// console.log(144/2);
// console.log(402/2);
// console.log(1292/2);


// // 2. NORMAL SYSTEM Odd Number (বিজোড় সংখ্যা)
// console.log(7/2);
// console.log(43/2);
// console.log(179/2);
// console.log(893/2);


// // // 1. NORMAL SYSTEM Even Number (জোড় সংখ্যা) ভাগশেষ বের করার জন্য এখানে ভাগশেষ সবগুলোর ০ হবে
// console.log(4%2);
// console.log(144%2);
// console.log(402%2);
// console.log(1292%2);

// // // 1. NORMAL SYSTEM Even Number (জোড় সংখ্যা) ভাগশেষ বের করার জন্য এখানে ভাগশেষ সবগুলোর ১ হবে
// console.log(7%2);
// console.log(43%2);
// console.log(179%2);
// console.log(893%2);



// ফাংশন ব্যবহার করে জোড় ও বিজোড় সংখ্যা বের করা 
function isEven (number) {
    const remainder = number % 2;
    console.log(remainder);
    if(remainder === 0){
        console.log('number is even');
    }
    else{
        console.log('number is odd');
    }
}

// isEven(303);
isEven(330);


// ফাংশন ব্যবহার করে জোড় ও বিজোড় সংখ্যা বের করা true and false বের করা দ
function isEven (number) {
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(330);ও
console.log(herNumberIsEven);



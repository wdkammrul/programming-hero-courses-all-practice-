// ** Normal system এখানে ৩ টা সিস্টেম হচ্ছে সাধারণ ভাবে আমরা করি কিন্তু VIP সিস্টেম নিচে 
// const myInches = 12;
// const myFeet = myInches / 12;

// console.log(myFeet);


// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log('dada feet', dadaFeet);


// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;
// console.log('dadi feet', dadiFeet);



// ** PROFESSIONAL SYSTEM 
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const dadiInches = 72;
const dadiFeet = inchToFeet(dadiInches);
console.log(dadiFeet);
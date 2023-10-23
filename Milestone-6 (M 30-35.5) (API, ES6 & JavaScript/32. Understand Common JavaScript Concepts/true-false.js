/*
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0 (সব পজিটিভ ও নেগেটিভ নম্বরেই সত্য হবে ০ বাদে )
3. any string other than empty string (সব স্ট্রিং সত্য কিন্তু ''(empty) স্ট্রিং মিথ্যা)
4. 0 false কিন্তু '0' স্ট্রিং ওয়ালা ০ সত্য হয়ে যায় । 
4. false false কিন্তু 'false' স্ট্রিং ওয়ালা 'false' সত্য হয়ে যায় । 
5. {}
6. []

Falsy:
1. false
2. 0  (ভেলু ০ হলে মিথ্যা হবে )
3. ''  (empty) স্ট্রিং মিথ্যা)
4. undefined 
5. null
*/

// 1. truthy and falsy (true, false)
const x = true;
// const x = false;
if (x) {
  // console.log('value of x is truthy');
} else {
  // console.log('value of x is falsy')
}

// 2.  0  (ভেলু ০ হলে মিথ্যা হবে )
// const a = 0;
// 2. any number (+ve, -ve) will be truthy other than 0 (সব পজিটিভ ও নেগেটিভ নম্বরেই সত্য হবে ০ বাদে )
// const a = 1;
const a = -5;
if (a) {
  // console.log('value of a is truthy');
} else {
  // console.log('value of a is falsy')
}


// 3. ''  (empty) স্ট্রিং মিথ্যা)
// const y = '';
// 3. any string other than empty string (সব স্ট্রিং সত্য কিন্তু ''(empty) স্ট্রিং মিথ্যা)
// const y = 'kamrul'
const y = "somad";
if (y) {
//   console.log("value of y is truthy");
} else {
//   console.log("value of y is falsy");
}



// 4. 0 false কিন্তু '0' স্ট্রিং ওয়ালা ০ সত্য হয়ে যায়
// const z = "0"; truth 
// 4. false false কিন্তু 'false' স্ট্রিং ওয়ালা 'false' সত্য হয়ে যায় । 
const z = 'false' // truth 

console.log(z)
if (z) {
  console.log("value of z is truthy");
} else {
  console.log("value of z is falsy");
}




// Optional value সত্য না মিথ্যা তা চেক করবো এই সিস্টেমে ।
// check falsy  
const p = null;
if (!p){
    console.log('value is falsy')
}

// check falsy
const q = true;
if (!!q){
    console.log('value is truthy')
}
// এটা  একটা গ্লবাল স্কোপ এটা সব স্থান থেকে ডাক দিলে পাবো 
const x = 5;

// {
//     console.log(x)
// }


// // block scope নিচের লেটের কাজ শুধু {} এর মধ্যেই পাল্টানো যাবে । বাহির থেকে ডাক দিলে পাওয়া যাবে না   
// {    
//     let x = 35;
//     console.log(x)
// }



// // function scope
// {
//     var x = 43;
//     x++;
//     console.log('inside block', x)
// }

// console.log('outside block', x)


// functional scope ভার কিসে আটকায় ? উত্তর: ফাংশনে । 
function show(){
    var x = 5;
    y = 10;
}

show();
console.log(y)











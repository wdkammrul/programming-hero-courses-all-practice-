/* 
   
*/

// এটা বুঝিনি 
function isInteger(x) {
    if(typeof x !== 'number'){
        return 'please provide a number';
    }
    
    // কোনো সংখ্যাকে ১ দ্বারা ভাগ করলে রেজাল্ট ০ আসবে ।
    if(x%1 === 0){
        return true;
    }else{
        return false;
    }

}

console.log(isInteger('2.35'))

// var : no reason to use var
// let: allow it to reassign    
// const do not allow it to reassign


// কন্স দিয়ে একটা ইনপুটকে numbers ২বার করা যাবে না ইরোর দিবে  
const numbers = [1, 2, 3, 4, 5];
// numbers = [3, 4, 5];
numbers[1] = 55;
numbers.push(3, 4, 2, 5);
console.log(numbers);



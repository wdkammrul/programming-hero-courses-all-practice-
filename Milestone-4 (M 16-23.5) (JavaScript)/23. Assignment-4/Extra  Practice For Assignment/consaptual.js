// Problem-2 
// function isJavaScriptFile(filename){
//     if(typeof filename !== 'string'){
//         return 'please provide me a valid file name (string).'
//     }else{
//         // if(filename.toLowerCase().endsWith('.js') === true){
//         //     return true;
//         // }else{
//         //     return false;
//         // }
        
//         return filename.toLowerCase().endsWith('.js');  //true || false
//     }
// }

// console.log(isJavaScriptFile('hello.js'))



// // Problem-3
// function mindGame(x){
//   if(typeof x !== 'number'){
//     return 'please provide a number';
//   }else if(x <= 0){
//     return 'please provide a positive number';
//   }else{
//     const result = (((x*3)+10)/2)-5
//     return result
//   }

// }

// console.log(mindGame(5))



// function sortMaker(arr) {
//     // Check if the input is an array and contains exactly 2 elements
//     if (!Array.isArray(arr) || arr.length !== 2) {
//         return "Invalid Input";
//     }
    
//     // Check if the array elements are positive integers
//     if (!arr.every(item => typeof item === 'number' && item >= 0)) {
//         return "Invalid Input";
//     }

    
//     // Sort the array and return
//     arr.sort((b, a) => a - b);
    
//     // Check for equal elements
//     if (arr[0] === arr[1]) {
//         return "equal";
//     } 
    
//     return arr;
// }

// console.log(sortMaker([2, 3]));   // Output: [2, 3]
// console.log(sortMaker([4, 2]));   // Output: [2, 4]
// console.log(sortMaker([4, 4]));   // Output: equal
// console.log(sortMaker([1, 2]));   // Output: [1, 2]
// console.log(sortMaker([4, -2]));  // Output: Invalid Input





function sortMaker(arr) {
    // if (!Array.isArray(arr) || arr.length !== 2) {
    //     return "Invalid Input";
    // }
    
    if (!arr.every(item => typeof item === 'number' && item >= 0)) {
        return "Invalid Input";
    }

    // arr.sort((b, a) => a - b);

    if (arr[0] === arr[1]) {
        return "equal";
    } 
    

    return arr;
}

console.log(sortMaker([2, 3]));   
console.log(sortMaker([4, 2]));   
console.log(sortMaker([4, 4]));   
console.log(sortMaker([1, 2]));   
console.log(sortMaker([4, -2]));  
 




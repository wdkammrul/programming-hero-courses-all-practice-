// problem-1
// function cubeNumber(number) {
//    if(typeof number !== 'number'){
//     result = 'Please send a number';
//    }else{
//         result = Math.pow(number, 3);     
//    }

//    return result
// }

// console.log(cubeNumber(5));

// problem-2 
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please send a string';
    }else {
          if (string1.includes(string2)) {
            return true;
        }else{
            return false;
        }
    }
}

console.log(matchFinder('John Doe', 'ohn'))
console.log(matchFinder('kamrul', 99))



// Problem-3 
// function sortMaker(arr) {
//     if (!Array.isArray(arr) || arr.length !== 2) {
//         return "Invalid Input";
//     }
    
//     if (!arr.every(item => typeof item === 'number' && item >= 0)) {
//         return "Invalid Input";
//     }

//     arr.sort((b, a) => a - b);

//     if (arr[0] === arr[1]) {
//         return "equal";
//     } 

//     return arr;
// }

// console.log(sortMaker([2, 3]));   
// console.log(sortMaker([4, 2]));   
// console.log(sortMaker([4, 4]));   
// console.log(sortMaker([1, 2]));   
// console.log(sortMaker([4, -2]));  




// Problem-4
// function findAddress(obj) {
// function findAddress(obj) {
//     const values = Object.values(obj);
//     const output = values.join(',');
//     return output;
// }

// const input = { street: 10, house: "15A", society: "Earth Perfect" };
// console.log(findAddress(input));


// Problem-4 বিকল্প সিস্টেম 
// function findAddress(obj) {
//     const values = Object.values(obj);
//     let output = "";
//     for (let i = 0; i < values.length; i++) {
//         output += values[i];

//         if (i !== values.length - 1) {
//             output += ',';
//         }
//     }

//     return output;
// }

// const input = { street: 10, house: "15A", society: "Earth Perfect" };
// console.log(findAddress(input));



// Problem-5  
// function canPay(notes, chipsPrice) {
//     if (notes.length === 0) {
//         return 'Kindly come and purchase chips with the money, please.'
//     }
    
//     const totalNotes = notes.reduce((sum, note) => sum + note, 0);
//     return totalNotes >= chipsPrice;
// }

// console.log(canPay([1, 2, 5], 10)); // Output: true
// console.log(canPay([1, 5, 5], 10)); // Output: false
// console.log(canPay([], 5)); // Output: null (Empty array)
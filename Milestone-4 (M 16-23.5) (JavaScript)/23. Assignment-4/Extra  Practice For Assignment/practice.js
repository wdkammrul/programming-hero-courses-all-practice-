// problem-1
// function cubeNumber(number) {
//    if(typeof number !== 'number'){
//     result = 'Please send a number';
//    }else{
//         result = Math.pow(number, 3);     
//    }

//    return result
// }

// console.log(cubeNumber(3));

// problem-2 
// function matchFinder(string1, string2) {
//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//         return 'Please send a string';
//     }else {
//           if (string1.includes(string2)) {
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// console.log(matchFinder('John Doe', 'ohn'))
// console.log(matchFinder('kamrul', 99))



// // Problem-3 
// function sortMaker(arr) {
//     if (!Array.isArray(arr) || arr.length !== 2) {
//         return "Invalid Input is not countable";
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


// Problem-3 বিকল্প সিস্টেম 
// function sortMaker(arr) {
//     if (arr.length !== 2) {
//         return "Please Give 2 Input"
//     }
//     else {
//         value1 = arr[0];
//         value2 = arr[1];
//         if (value1 >= 0 && value2 >= 0) {
//             if (value1 < value2) {
//                 return [value2, value1];
//             }
//             else if (value1 > value2) {
//                 return [value1, value2];
//             }
//             else {
//                 return "equal";
//             }
//         }
//         else {
//             return "Invalid Input";
//         }
//     }
// }


// // problem 3 ২য় বিকল্প সিস্টেম 
function sortMaker(arr) {
    // যদি দুটি সংখ্যা না প্রদান করা হয়
    if (arr.length !== 2) {
        return "Please provide 2 inputs";
    } else {
        // দুটি সংখ্যা প্রাপ্ত করুন
        const value1 = arr[0];
        const value2 = arr[1];

        // যদি উভয় সংখ্যা অগ্রধীক হয়
        if (value1 >= 0 && value2 >= 0) {
            if (value1 < value2) {
                // সংখ্যা গুলি সর্বোচ্চ থেকে সর্বনিম্ন ক্রমে প্রদর্শন করুন
                return [value2, value1];
            } else if (value1 > value2) {
                // সংখ্যা গুলি সর্বনিম্ন থেকে সর্বোচ্চ ক্রমে প্রদর্শন করুন
                return [value1, value2];
            } else {
                // উভয় সংখ্যা সমান
                return "Both values are equal";
            }
        } else {
            // যদি সংখ্যাগুলি অগ্রধীক না হয়
            return "Invalid input, both values must be non-negative";
        }
    }
}

// টেস্ট করুন
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


// // Problem-4 বিকল্প সিস্টেম 
function findAddress(obj) {
    const values = Object.values(obj);
    let output = "";
    for (let i = 0; i < values.length; i++) {
        output += values[i];

        if (i !== values.length - 1) {
            output += ',';
        }
    }

    return output;
}

const input = { street: 10, house: "15A", society: "Earth Perfect" };
console.log(findAddress(input));



// // Problem-5  
// function canPay(notes, chipsPrice) {
//     if (notes.length === 0) {
//         return 'Kindly come and purchase chips with the money, please.'
//     }
    
//     const totalNotes = notes.reduce((sum, note) => sum + note, 0);
//     return totalNotes >= chipsPrice;
// }

// console.log(canPay([1, 2, 5], 10)); 
// console.log(canPay([1, 5, 5], 10)); 
// console.log(canPay([], 5)); 
// ARIFIN VAIER PRACTICE 

// function cubeNumber(number) {
//     if (typeof (number) === "number") {
//         const cube = Math.pow(number, 3);
//         return cube;
//     }
//     else {
//         return 'Enter A Valid Number';
//     }
// }

function matchFinder(string1, string2) {
    if (typeof (string1) === "string" && typeof (string2) === 'string') {

        if (string1.includes(string2)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Enter a Valid String Type Word';
    }
}

console.log(matchFinder('John Doe', 'ohn'))

// function sortMaker(arr) {
//     value1 = arr[0];
//     value2 = arr[1];
//     if (value1 >= 0 && value2 >= 0) {
//         if (value1 < value2) {
//             return [value1, value2];
//         }
//         else if (value1 > value2) {
//             return [value2, value1];
//         }
//         else {
//             return "equal";
//         }
//     }
//     else {
//         return "Invalid Input";
//     }
// }
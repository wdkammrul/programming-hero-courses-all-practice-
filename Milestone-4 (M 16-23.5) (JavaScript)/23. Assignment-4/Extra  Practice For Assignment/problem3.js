// problem-3 
function sortMaker(arr) {
      const value1 = arr[0];
      const value2 = arr[1];
    if (value1 >= 0 && value2 >= 0) {
            if (value1 < value2) {
                return [value2, value1];
            } else if (value1 > value2) {
                return [value1, value2];
            } else {
                return "equal";
            }
        }else{
            return 'Invalid Input'
        }   
}

console.log(sortMaker([2, 3]));   
console.log(sortMaker([4, 2]));   
console.log(sortMaker([4, 4]));   
console.log(sortMaker([1, 2]));   
console.log(sortMaker([4, -2]));
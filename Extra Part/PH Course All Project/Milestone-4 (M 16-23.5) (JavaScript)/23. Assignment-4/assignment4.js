function cubeNumber(number) {
   if(typeof number !== 'number'){
    result = 'Please send a number';
   }else{
        result = Math.pow(number, 3);     
   }

   return result
}

console.log(cubeNumber(3));
console.log(cubeNumber(''));


function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Kindly provide a string.';
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


function findAddress(obj) {
   if(typeof obj !== 'object'){
     return 'Please provide me a valid object'
   }else{
     const street = obj.street || '--';
     const house = obj.house || '--';
     const society = obj.society || '--';
     return street + ',' + house + ',' + society
   }
}

const input = { 
    street: 10, 
    house: "15A", 
    society: "Earth Perfect" 
}

console.log(findAddress(input))



function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return 'Kindly come and purchase chips with the money, please.'
    }
    
    const totalNotes = changeArray.reduce((sum, note) => sum + note, 0);
    return totalNotes >= totalDue;
}

console.log(canPay([1, 2, 5], 10)); 
console.log(canPay([1, 5, 5], 10)); 
console.log(canPay([], 5));
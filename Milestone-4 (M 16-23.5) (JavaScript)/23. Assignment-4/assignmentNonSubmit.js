function cubeNumber(number) {
   if(typeof number !== 'number'){
    result = 'Please send a number';
   }else{
        result = Math.pow(number, 3);     
   }

   return result
}


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




function canPay(notes, chipsPrice) {
    if (notes.length === 0) {
        return 'Kindly come and purchase chips with the money, please.'
    }
    
    const totalNotes = notes.reduce((sum, note) => sum + note, 0);
    return totalNotes >= chipsPrice;
}


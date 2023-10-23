function findAddress(obj) {
   if(typeof obj !== 'object'){
     return 'please provide me a valid object'
   }else{
     const street = obj.street || '--';
     const house = obj.house || '--';
     const society = obj.society || '--';
     return street + ',' + house + ',' + society
   }
}

// const input = { 
//     street: 10, 
//     house: "15A", 
//     society: "Earth Perfect" 
// }

const input = { 
    street: 10, 
    // house: "15A", 
    society: "Earth Perfect" 
}

console.log(findAddress(input))
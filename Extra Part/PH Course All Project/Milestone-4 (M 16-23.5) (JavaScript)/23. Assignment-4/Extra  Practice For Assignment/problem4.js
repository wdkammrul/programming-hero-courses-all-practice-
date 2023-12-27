function findAddress(obj) {

    const address = {
        street: "__",
        house: "__",
        society: "__"
    };

   
    const mergedAddress = { ...address, ...obj };

  
    const output = `${mergedAddress.street},${mergedAddress.house},${mergedAddress.society}`;

    return output;
}

console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
console.log(findAddress({ street: 10 }));

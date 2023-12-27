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

// const input = {street: 10, house: "15A", society: "Earth Perfect" };
const input = {street:10,society:'Earth Perfect'}
console.log(findAddress(input));
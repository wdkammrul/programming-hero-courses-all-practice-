function milesToKilometers(miles) {
    const kilometer = miles*1.609;
    return kilometer;
}

const roadMiles = 7;
const readKm = milesToKilometers(roadMiles);
console.log(readKm);
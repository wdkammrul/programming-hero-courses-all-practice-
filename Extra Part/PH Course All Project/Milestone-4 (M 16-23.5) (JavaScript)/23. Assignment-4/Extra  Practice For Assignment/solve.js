function findAddress(obj) {
    const address = {
        street: "__",
        house: "__",
        society: "__"
    };

    const mergedAddress = { ...address, ...obj };
    let formattedAddress = "";

    // প্রোপার্টিগুলো চেক এবং ফরম্যাট করা
    if (mergedAddress.street !== undefined) {
        formattedAddress += mergedAddress.street;
    } else {
        formattedAddress += "__";
    }

    formattedAddress += ",";

    if (mergedAddress.house !== undefined) {
        formattedAddress += mergedAddress.house;
    } else {
        formattedAddress += "__";
    }

    formattedAddress += ",";

    if (mergedAddress.society !== undefined) {
        formattedAddress += mergedAddress.society;
    } else {
        formattedAddress += "__";
    }

    return formattedAddress;
}

// টেস্ট করুন
console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
console.log(findAddress({ street: 10 }));

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
console.log(sortMaker([2, 3]));   
console.log(sortMaker([4, 2]));   
console.log(sortMaker([4, 4]));   
console.log(sortMaker([1, 2]));   
console.log(sortMaker([4, -2]));
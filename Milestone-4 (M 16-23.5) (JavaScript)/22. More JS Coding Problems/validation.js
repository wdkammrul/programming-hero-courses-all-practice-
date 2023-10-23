function add(num1, num2) {
    // কোনো কারনে নিচের সংখ্যার জায়গায় যদি স্ট্রিং বা বুলিয়ান কিছু লেখা থাকে তাহলে typeof দিয়ে চেক করতে হয় 
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    };
    return num1 + num2;
}

const result = add(12, 45);
console.log(result)



// এখানে একটা গুন করার চেস্টা করি 
function multiply(num1, num2){
    return num1 * num2;
}

const output = multiply(2, 5);
console.log(output);
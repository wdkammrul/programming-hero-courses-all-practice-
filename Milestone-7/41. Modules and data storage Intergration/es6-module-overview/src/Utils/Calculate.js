const add = (first, second) => {
    return first + second;
}


const multiply = (first, second) =>{
    return first * second;
}

const divideTheFirstNumberByTheSecondNumber = (first, second) => {
    return first / second;
}


// default হিসেবে যদি একটা ফাংশন export করতে হয় তাহলে এই সিস্টেম 
// export default add;


//  যদি একাধিক ফাংশন export করতে হয় তাহলে এই সিস্টেম 
export {add, multiply, divideTheFirstNumberByTheSecondNumber}
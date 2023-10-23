/*
1. var let const 
2. default parameter 
3. tamplate string 
4. arrow function
5. destructuring and Spread operator 
6. Object.keys, Object.values, Object.entries
7. for of used in array and string
8. for in loop used in object 

*/

// 4. arrow function
const square = (x) => x * x;
const sum = (a, b) => a + b;

// 5. destructuring and Spread operator 
const {age, z, ...others} = {x: 2, y: 4, z:4, name: 'kamrul', age: 22}
// console.log(age, z)

const [first, second, ...remaining] = ['kamrul', 'najmul', 'arif', 'bappi']
// console.log(first, second, ...remaining)
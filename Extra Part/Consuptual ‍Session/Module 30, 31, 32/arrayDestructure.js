const arr = [3, 4, 5, 6, 7, 8, 9]

const [a,b,c, ...rest] = arr;
console.log(a, b, c, ...rest);
// পুরানো সিস্টেম ১
const first = 'Kamrul';
const last = 'Islam';
const address = 'Dhaka,Bangladesh'
const name = first + ' ' + last + ' ' + address;
console.log(name); 


// পুরানো সিস্টেম ২
const a = 10 
const b = 20
const result1 = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result1);


// পুরানো সিস্টেম ২ এর সেইম জিনিসটাই আমরা Es6 দ্বারা দেখবো এবং খুবই সহজভাবে । 
const result2 = `The sum of ${a} and ${b} is ${a + b}`
console.log(result2);
 

// পুরানো সিস্টেম ৩ একধিক লাইনে একধিক নাম একসাথে লিখা 
const email1 = 'Hi Kamrul \n' + 
'How are you? \n' +
'Where you are from'
console.log(email1)



// পুরানো সিস্টেম ৩ একধিক লাইনে একধিক নাম একসাথে লিখা ES6 এর ভ্যাকটিক(backtick) ব্যবহার করে 
const email2 = `Hi Kamrul 
How are you?
Where you are from?`;
console.log(email2)      



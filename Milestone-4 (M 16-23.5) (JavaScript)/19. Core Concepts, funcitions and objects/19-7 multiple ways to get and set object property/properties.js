var shoppingCart = {
    books: 3, 
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
 
// 1. আমি যখন একটা প্রপারটির নাম জানি তখন প্রপারটির ভেলু সেট করে দিব 
var penCount = shoppingCart.pen;

// alternative system
// 2. (বিকল্প সিস্টেম) আমি যখন একটা প্রপারটির নাম জানি তখন প্রপারটির ভেলু সেট করে দিব । 
var penCount = shoppingCart['pen'];

// 3. যদি দরকার হয় উপরের প্রপারটিজগুলোর সব কি এর নাম আলাদাভাবে পেতে পারি 
var properties = Object.keys(shoppingCart);
console.log(properties);

// 4. যদি দরকার হয় উপরের প্রপারটিজগুলোর সব ভ্যালু আলাদাভাবে দেখতে পারি । 
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

console.log(shoppingCart);



// 5. set property values ***3 system a একটা  ভ্যালু সেট করতে পারি 
// 1st system 
shoppingCart.mouse = 15;

// 2nd system 
shoppingCart['mouse'] = 29;

// 3rd system 
var propertyName = 89;
shoppingCart[propertyName] = 89;


console.log(shoppingCart);
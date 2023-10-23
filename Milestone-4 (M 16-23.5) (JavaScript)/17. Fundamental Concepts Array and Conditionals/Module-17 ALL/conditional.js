var iphonePrice = 79000;
var myBudget = 95000;
// যদি আইফোনের দাম আমার বাজেটের কম হয় আমি আইফোনটি  কিনবো 
// if iphone price is less than my budgedt, i will buy the iphone 

// এখানে নিচে দেয়া সর্তটা যদি পূরণ হয় তাহলে রেজাল্ট দেখা যাবে নচেৎ রেজাল্ট দেখা যাবে না 
if ( iphonePrice < myBudget){
    console.log('i phone kine falbo')
}


var chickenPrice = 500; 
var myMoney = 50;
 
// এখানে ২টা সর্ত আছে এটা আমি একবারে লিখে ফেলতে পারবো 
if (chickenPrice <= myMoney){
    console.log('Murgir raan kamu and haddi kamu')
}
if (chickenPrice > myMoney){
    console.log('Smashed potato and lentils soup')
}



// if সর্ত যদি প্রথমে পূরন হয় তাহলে else এ আর যাবে না । আর সর্ত যদি পূরন না হয় else এ চলে যাবে । 
if(chickenPrice < myMoney){
    console.log('I will eat chicken');
}
else{
    console.log('I will eat potato')
}
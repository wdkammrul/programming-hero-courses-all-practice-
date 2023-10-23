var isGraduated = true;
var slary = 25000;
if(isGraduated === true){
    console.log('Esho amra gurta jai')
}

else{
    console.log('tomar kopala gurta jawya  nai')
}

// এখানে ২টি সর্ত আছে । ২টাই ফুলফিল হতে হবে । এখানে স্যালারি ২৫০০০ এজন্য সর্ত পূরণ হয়নি । 
if(isGraduated == true && slary > 50000){
    console.log('Esho amra gurta jai')
}

else{
    console.log('tomar kopala gurta jawya  nai')
}




var isGraduated = true;
var slary = 25000;
var cars = 0;

// এখানে 3টি সর্ত আছে । 3টাই ফুলফিল হতে হবে । এখানে স্যালারি ২৫০০০ ও গাড়ি এজন্য সর্ত পূরণ হয়নি ।
if(isGraduated == true && slary > 50000 && cars >= 1){
    console.log('Esho amra gurta jai')
}

else{
    console.log('tomar kopala gurta jawya  nai')
}



var isGraduated = true;
var slary = 250000;
var cars = 2;

// এখানে 3টি সর্ত আছে । 3টাই ফুলফিল আছে । এখানে শর্ত পূরন হয়েছে ।
// এখানে cars >= 1 মিনিমাম ১টা গাড়ি থাকতে হবে বলা আছে 
if(isGraduated == true && slary > 50000 && cars >= 1){
    console.log('Esho amra gurta jai')
}

else{
    console.log('tomar kopala gurta jawya  nai')
}





var isGraduated = true;
var slary = 20000;
var cars = 1;

// এখানে ||(অর) দ্বারা ২টা সর্তের ১টা পূরণ হলেই হবে ।
if(isGraduated == true || slary > 50000 ){
    console.log('Jodi tomar graduation or salary 50000 2tar 1ta thake tailai amra gurta jabo')
}

else{
    console.log('jodi tomar graduation and salary aktaw na thake ami tomer satha nai')
}

console.log(6 != 6)
console.log(6 >= 6)
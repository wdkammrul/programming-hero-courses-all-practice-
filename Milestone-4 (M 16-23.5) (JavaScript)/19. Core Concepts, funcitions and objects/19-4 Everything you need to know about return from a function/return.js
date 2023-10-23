// function এ return করা অনেকটা break এর মতো মানি রিটার্ন করলে কোড আর রিটার্নের নিচে যাবে না 
function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
    // console.log(sum);
}

// add(45, 15);
var total = add(80, 20);
// console.log('total', total);


// এখানে সিঙ্গারার দাম বের করা হয়েছে ১৫০ টাকায় ১৫ টা সিঙ্গারা পাওয়া যাবে । এটা দেখানো হয়েছে । 
function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('Eating:', singaras);
// এখানে কার্টের মধ্যে যে সংখ্যাগুলো আছে তা যোগ করা হয়েছে ।

const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'balt', price: 600},
];


function totalCast(products){
       let sum = 0;
     for(let i = 0; i <products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product)
     }
     return sum;
}

const finalResult = totalCast(shoppingCart);
console.log(finalResult);
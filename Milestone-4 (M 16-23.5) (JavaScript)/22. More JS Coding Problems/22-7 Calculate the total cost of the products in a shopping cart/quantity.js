const shoppingCart = [
    {name: 'balt', price: 600, quantity: 2},
    {name: 'pant', price: 3700, quantity: 5},
    {name: 'shirt', price: 2200, quantity: 4},
    {name: 'shoe', price: 1200, quantity: 3},
];


function totalCast(products){
       let sum = 0;
     for(let i = 0; i <products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity; 
        sum = sum + productTotal;
        // console.log(product)
     }
     return sum;
}

const finalResult = totalCast(shoppingCart);
console.log(finalResult);
// step-1 call addProduct btn
const addProduct = () => {
  // step-2 get id
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  // step-3 get value
  const product = productField.value;
  const quantity = quantityField.value;

  // step-5 empty value
  productField.value = "";
  quantityField.value = "";

  // step-4 test clg
  console.log(product, quantity);

  // step-11 call displayProduct(parameter)
  displayProduct(product, quantity);

//   step-13 
 saveProductTotalStorage(product, quantity);
};

// step-6 function create
const displayProduct = (product, quantity) => {
  // step-9 get ul id
  const ul = document.getElementById("product-container");
  // step-7 create li
  const li = document.createElement("li");
  // step-8 get product and quantity
  li.innerText = `${product}: ${quantity}`;

  // step-10 show display by appendChild
  ul.appendChild(li);
};

const getStoredShoppingCart = () => {
  // step-13
  let cart = {};
  // step-14
  const storedCart = localStorage.getItem("cart");
  // step-15
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }

  // step-16
  return cart; 
};

// step-12 save function create
const saveProductTotalStorage = (product, quantity) => {
    // step-14 
    const cart = getStoredShoppingCart();
    // step-15 
    cart[product] = quantity;
    // step-16 
    // console.log(cart)
    const cartStringified = JSON.stringify(cart)
    // step-17 
    localStorage.setItem('cart', cartStringified)
};


// step-18 
const displayProductsFromLocalStorage = () => {
    // step-19 
    const savedCart = getStoredShoppingCart();
    console.log(savedCart)
    // step-21 
    for(const product in savedCart){
        // step-22 
        const quantity = savedCart[product];
        console.log(product, quantity)
    }
}

// step-20 
displayProductsFromLocalStorage();
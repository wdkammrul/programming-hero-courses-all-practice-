let totalPrice = 0;

function addToCert(target) {
    const productTitle = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = productTitle;
    document.getElementById('product-list').appendChild(li);
    const price = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    const totalPriceValue = document.getElementById('total-price');
    totalPriceValue.innerText = totalPrice.toFixed(2);
    const discountPrice = document.getElementById('discount-price').value;
    document.getElementById('grand-total').innerText = totalPrice;

    if (totalPrice >= 200) {
        document.getElementById('coupon-btn').style.backgroundColor = '#E527B2'
        document.getElementById('coupon-btn').disabled = false
    }
    if (totalPrice > 0) {
        document.getElementById('purchase-btn').style.backgroundColor = '#E527B2'
        document.getElementById('purchase-btn').disabled = false
    }
}


function couponCode(target) {
    const couponText = target.parentNode.childNodes[3].value;
    if (totalPrice >= 200 && couponText === 'SELL200') {
        discountPrice = (totalPrice * 20) / 100;
        document.getElementById('discount-price').innerText = discountPrice;
        document.getElementById('grand-total').innerText = totalPrice - discountPrice;
    }
    else {
        alert('Enter The Coupon Code First');
    }
}

function resetBtn(){
    totalPrice = 0;
    document.getElementById('coupon-code').value = '';
    document.getElementById('product-list').innerText = '';
    document.getElementById('total-price').innerText = '0.00';
    document.getElementById('discount-price').innerText = '0.00';
    document.getElementById('grand-total').innerText = '0.00';
    document.getElementById('coupon-btn').disabled = true;
    document.getElementById('purchase-btn').disabled = true;
    document.getElementById('coupon-btn').style.backgroundColor = 'gray'
    document.getElementById('purchase-btn').style.backgroundColor = 'gray'
}
// step-1 
document.getElementById("btn-withdraw").addEventListener('click', function(){
//    step-2 
const withdrawField = document.getElementById("withdraw-field");
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString)

// step-3
withdrawField.value = '';

// step-4 
const withdrawTotal = document.getElementById("withdraw-total");
const previousWithdrawTotalString = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step-5 
const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
withdrawTotal.innerText = newWithdrawTotal;

// step-6 
const balanceTotal = document.getElementById("balance-total");
const previousBalanceTotalString = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);


// step-7  
const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
balanceTotal.innerText = newBalanceTotal;
})                                      
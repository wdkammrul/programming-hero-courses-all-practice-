/*
1. add event listener to the deposit button 
2. get deposit amount from the input field 
2.5 convert string deposit amount to a number type 
3. clear the input field after getting the value
4. get the the previous deposit total
5. calculate new deposit total and set the value to the deposit total

*/

// step-1
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-3:
  depositField.value = "";

  // step-4
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step-5
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  
  // step-6   
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);


  // step-7 
  const newBalanceTotal = newDepositTotal + previousBalanceTotal;
  balanceTotalElement.innerText = newBalanceTotal;

});

/* 
 1. add withdraw button event handler
 2. get withdraw amount by using getInputFieldValueById function
 3. get previous withdraw amount by using getTextElementValueById function 
 4. calculate new withdraw total and set the value 
 4.5. set new withdraw total by using setTextElementValueById function 
 5. get previous balance total by using getTextElementValueById function 
 6. calculate new balance total 
 7. set balance total using setTextElementValueById
*/ 

// step-1 
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step-2 
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    // step-3
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');


    // step-4 
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount; 

    // step-4.5 
    setTextElementValueById('withdraw-total', newWithdrawAmount);

    // step-5 
    const previousBalanceTotal = getTextElementValueById('balance-total')

    // step-6 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // step-7 
    setTextElementValueById('balance-total', newBalanceTotal)

    
})
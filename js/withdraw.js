/*
1. add withdraw button event handler
2. get withdraq amount by using getInputFieldValueById function
3. get prebious withdraw amountb using geTextElementValueById
4. calculate new withdraw Total and set the value
4.5 set new withdraw total by using getInputFieldValueById function
5. get previous balance total by uning getInputFieldValueById function
6. calculete new balance total
7. set balance total using setTextElementValueById

*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
    
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWthdrawTotal = getTexElementValueById('withdraw-total');
    const newWithdrawTotal = previousWthdrawTotal + newWithdrawAmount;
    setTextElemntValueById('withdraw-total', newWithdrawTotal);

    const newBalanceTotal = getTexElementValueById('balance-total');
    const newBalanceAmount = newBalanceTotal - newWithdrawAmount;
    setTextElemntValueById('balance-total', newBalanceAmount);

 

})
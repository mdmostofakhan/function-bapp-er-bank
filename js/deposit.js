


document.getElementById('btn-deposit').addEventListener('click', function () {
    /*
    1. get the ekement by id
    2. get the value from the element 
    3. convert striong value to a number
    */
    const newDepositAmout = getInputFieldValueById('doposit-field');

    /*
       1. get previous deposite total By Id
    */
    
    const previousDepositTotal = getTexElementValueById('doposite-total');
     
    const newDepositTotal = previousDepositTotal + newDepositAmout;
     
    setTextElemntValueById('doposite-total', newDepositTotal);

    // get previous Balance by using thr function

    const previousBalanceTotal = getTexElementValueById('balance-total');
    const newBalance = previousBalanceTotal + newDepositAmout;
    setTextElemntValueById('balance-total', newBalance);


})

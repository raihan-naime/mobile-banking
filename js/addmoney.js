document.getElementById('btn-add-money').addEventListener('click', function(event){
    const addMoneyAmount = getInputValue('amount-add-money');
    const pinNumber = getInputValue('pin-add-money');

    // console.log(addMoneyAmount, pinNumber);

    if(pinNumber === 1111){
        const currentBalance = getTextValue('current-balance');
        
        const newBalance = addMoneyAmount + currentBalance;
        
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('Please try again later');
    }
})
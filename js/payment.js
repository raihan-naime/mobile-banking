document.getElementById('btn-payment').addEventListener('click', function(event){

    const paymentAmount = getInputValue('amount-payment');
    const pinNumber = getInputValue('pin-payment');
    
    if(pinNumber === 1111){
        const currentBalance = getTextValue('current-balance');
        const newBalance = currentBalance - paymentAmount;

        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('There is a problem. Please try again later')
    }
})
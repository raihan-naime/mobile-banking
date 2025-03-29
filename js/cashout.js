document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutMoney = getInputValue('amount-cash-out');
    const pinNumber = getInputValue('pin-cash-out');
    
    if(pinNumber === 1111){
        const currentBalance = getTextValue('current-balance');
        const newBalance = currentBalance - cashOutMoney;

        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('There is a problem. Please try again later')
    }
})
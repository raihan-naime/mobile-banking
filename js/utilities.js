// function to get value from mobile number and pin number 
function getInputValue (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// to get value from input field
function getTextValue (id){
    const inputText = document.getElementById(id).innerText;
    const inputTextNumber = parseFloat(inputText);
    return inputTextNumber;
}

// to get specific form to use
function getSpecificForm (id){
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('payment-section').classList.add('hidden');
    document.getElementById('discount-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById('recharge-section').classList.add('hidden');

    // get specific form by clicking the button
    document.getElementById(id).classList.remove('hidden')
}
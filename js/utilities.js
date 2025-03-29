// function to get value from mobile number and pin number 
function getInputValue (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
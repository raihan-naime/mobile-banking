document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    // const mobileNumber = document.getElementById('mobile-number').value;
    // const pinNumber = document.getElementById('pin-Number').value;
    // console.log(mobileNumber, pinNumber);

    const mobileNumber = getInputValue('mobile-number');
    const pinNumber = getInputValue('pin-Number');
    console.log(mobileNumber, pinNumber);

    if(mobileNumber === 4444 && pinNumber === 1111){
        console.log('welcome you are logged in');
        window.location.href = "home.html"
    }
    else{
        alert('Sorry there is some issus. Failed to login');
    }
})
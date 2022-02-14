function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayInput = document.getElementById('typed-pin');

    if(isNaN(number)){
        if(number == 'C'){
            displayInput.value = '';
        }
    }
    else{
        const previousInput = displayInput.value;
        const newInput = previousInput + number
        displayInput.value = newInput;
    }
    
})
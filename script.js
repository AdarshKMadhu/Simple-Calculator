
// C button
function clearDisplay(){
    document.getElementById('display').value = '';
}

//Back Button
function deleteLastChar(){
    const displayElement  = document.getElementById('display');
    displayElement.value = displayElement.value.slice(0,-1);
}

// To append to display
function appendToDisplay(operator){
    document.getElementById('display').value += operator;
}

//to calcualte teh result
function calculateResult(){
    const expression = document.getElementById('display');
    try{
        expression.value = eval(expression.value.replace("√", "Math.sqrt"));
    }
    catch{
        expression.value = "Error";
    }
}

//To get the values form the keyboard

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        calculateResult();
    }
    else if('0123456789/*-+.√'.includes(event.key)){
        appendToDisplay(event.key);
    }
    else if(event.key === 'Backspace'){
        deleteLastChar();
    }
});
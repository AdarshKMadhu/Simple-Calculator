// Clear the display when 'C' button is clicked
function clearDisplay(){
    document.getElementById('display').value = '';
}

// Delete the last character in the display when 'Back' button is clicked
function deleteLastChar(){
    const displayElement = document.getElementById('display');
    displayElement.value = displayElement.value.slice(0, -1);
}

// Append characters to the display
function appendToDisplay(operator){
    document.getElementById('display').value += operator;
}

// Calculate the result and update the notepad with the calculation history
function calculateResult(){
    const displayElement = document.getElementById('display');
    const originalExpression = displayElement.value;

    try {
        
        const result = eval(originalExpression.replace("√", "Math.sqrt"));
        displayElement.value = result; 
        updateNotepad(originalExpression, result); 
    } catch {
        displayElement.value = "Error";
    }
}

// Update the notepad with the latest calculation and result
function updateNotepad(expression, result){
    const notepad = document.getElementById('math-area');
    notepad.value += `${expression} = ${result}\n`;
}

// Capture keyboard events for input
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

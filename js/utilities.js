// ** get the input value

function getInputValue(inputId){
    const inputValue = parseFloat(document.getElementById(inputId).value);
    return inputValue;
}

// ** get innerText value

function getInnerTextValue(innerTextId){
    const innerTextValue = parseFloat(document.getElementById(innerTextId).innerText);

    return innerTextValue;
}

// ** set the innerText value

function setInnerTextValue(id, value){
    document.getElementById(id).innerText = value;
}
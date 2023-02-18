
function getInputFieldValueById(inputFieldId) {

    const inputField = document.getElementById(inputFieldId);
    const inPutFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inPutFieldValueString);
    inputField.value = '';
    return inputFieldValue;

   }

function getTexElementValueById(elementID) {

    const texElement = document.getElementById(elementID);
    const textElementValueString = texElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElemntValueById(elementID, newValue) {
    const texElement = document.getElementById(elementID);
    texElement.innerText = newValue;
}
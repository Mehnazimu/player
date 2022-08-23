function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputAmount = parseFloat(inputValueString);
    inputField.value = '';

    return inputAmount;
}

function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
function setElementText(textId, textValue) {
    const elementText = document.getElementById(textId);
    elementText.innerText = textValue;
}
function checkValidation(inputId) {
    if (isNaN(inputId)) {
        alert('enter a valid number');

    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCost = getInputValue('per-player');
    checkValidation(perPlayerCost);
    const playerExpenses = perPlayerCost * 5;
    setElementText('player-expenses', playerExpenses);
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const playerExpenses = getElementValue('player-expenses');

    const managerCost = getInputValue('manager');
    checkValidation(managerCost);
    const coachCost = getInputValue('coach');
    checkValidation(coachCost);
    const totalCost = playerExpenses + managerCost + coachCost;
    setElementText('total', totalCost);


})
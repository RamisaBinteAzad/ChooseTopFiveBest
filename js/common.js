function getInputFieldValueById(inputFieldId) {
    const perPlayerBudgetsInput = document.getElementById(inputFieldId);
    const perPlayerBudgetsString = perPlayerBudgetsInput.value;
    const perPlayerBudgets = parseFloat(perPlayerBudgetsString);
    perPlayerBudgets.value = '';
    return perPlayerBudgets;
}
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
function setElementValueById(elementId,newValue)
{
    const element = document.getElementById(elementId);
    element.innerText=newValue;
}
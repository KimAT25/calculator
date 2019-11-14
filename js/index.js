const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .digits button, .calc .operation button')
    .forEach( button => button.addEventListener('click', digitOperPressed));
function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
};
document.querySelector('.calc .equal')
    .addEventListener('click', equalPressed);
function equalPressed() {
    display.value = eval(display.value);
};
document.querySelector('.calc .all-clear-all')
    .addEventListener('click', clearPressed);
function clearPressed() {
   display.value = null;
}

document.querySelector('.calc .clear-all')
    .addEventListener('click', clearLastDigit);
function clearLastDigit() {
    const numbers = display.value;
    display.value = numbers.slice(0,-1);
}




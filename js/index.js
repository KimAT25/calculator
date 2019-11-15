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
    if (eval(display.value) === Infinity || -Infinity) 
    {display.value = 'div0'} 
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
document.querySelector('.calc .minus-number')
    .addEventListener('click', minNumbr);
function minNumbr() {
    const minNum = parseFloat(display.value);
    display.value = minNum * (-1);
}
document.querySelector('.calc .procent')
    .addEventListener('click', procentNumbr);
function procentNumbr() {
    const minNum = parseFloat(display.value);
    display.value = minNum / 100;
}
document.querySelector('.calc .operation')
    .addEventListener('click', oneClick);
function oneClick() {
    if(display.value === operation.length) {
        const oneClikOprn = display.value;
        display.value = oneClikOprn.slice(0,-1) + eval(display.value);
    }; 
}

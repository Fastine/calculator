// Evaluation Functions

function add(num1, num2) {
    let sum = (Number(num1 + num2));
    if (num1 == NaN || num2 == NaN) throw Error('Numbers only!');
    return sum;
}

function subtract(num1, num2) {
    let diff = (Number(num1 - num2));
    if (num1 == NaN || num2 == NaN) throw Error('Numbers only!');
    return diff;
}

function multiply(num1, num2) {
    let product = (Number(num1 * num2));
    if (num1 == NaN || num2 == NaN) throw Error('Numbers only!');
    return product;
}

function divide(num1, num2) {
    let quotient = (Number(num1 / num2));
    if (num1 == NaN || num2 == NaN) throw Error('Numbers only!');
    return quotient;
}

function operate(fn, num1, num2) {
    return result = fn(num1, num2);
}

// UI Functions
// Display 

let init = 0;
let displayValue = 0;
document.getElementById('value').innerHTML = `${displayValue}`;


const numberButtons = Array.from(document.querySelectorAll('.number'));
numberButtons.forEach(number => number.addEventListener('click', populateDisplay))
document.querySelector('.AC').addEventListener('click', clearDisplay)
document.querySelector('.del').addEventListener('click', del)

function populateDisplay() {
    const number = this.getAttribute("key");
    (init > 0 ) ? displayValue = `${displayValue}${number}` : displayValue = `${number}`;
    document.getElementById('value').innerHTML = `${displayValue}`;
    init++;
}

function clearDisplay() {
    displayValue = 0;
    init = 0;
    document.getElementById('value').innerHTML = `${displayValue}`;
}

function del() {
    displayValue = displayValue.substring(0, displayValue.length-1)
    document.getElementById('value').innerHTML = `${displayValue}`;
}
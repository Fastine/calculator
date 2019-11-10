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
// Declarations
let operrands = []
    , n = 0
    , sign;

// Basic math functions
function add(a, b) {
    return result.textContent = `Result is : ${a+b}`,
    operrands[n] = a+b 

}

function subtract(a, b) {
    return result.textContent = `Result is : ${a-b}`,
    operrands[n] = a-b 

}

function multiply(a, b) {
    return result.textContent = `Result is : ${a*b}`,
    operrands[n] = a*b 

}

function divide(a, b) {
    if (b == 0) {
        return result.textContent = "Dividing by 0 isn't possible, please press on clear to reset the calculator!"
    } else {
    return result.textContent = `Result is : ${a/b}`,
    operrands[n] = a/b 
}
}

function operate(a, b) {
    if (sign == 'x') multiply(a, b);
    else if (sign == '+') add(a, b);
    else if (sign == '-') subtract(a, b);
    else if (sign == '/') divide(a, b);
}

// HTML document querying
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const display = document.getElementById('operations');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('equalsSign');

// Log numbers and display them
numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent += number.innerText
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {

        // Log operator, store previous value, clear previous value from display
        if (n == 0){
            sign = operator.innerText;
            operrands[n] = display.textContent;
            display.textContent = "";
            n++
        }

        // Store previous value, reset "n" counter, pass values to operator function, and logs operator for next operation
        else if ( n == 1) {
            operrands[n] = display.textContent;
            display.textContent = "";
            n=0;
            operate(Number(operrands[0]),Number(operrands[1]));
            sign = operator.innerText;
            n++
        }

        // logs operator and reset field for usage after using the equals sign
        else if ( n == 2) {
            sign = operator.innerText;
            display.textContent = "";
            n=1;
        }
    })
});

/* Stores second value, resets display field ,resets "n" counter, passes values to operation function, and sets the counter to 2 
to avoid looping to the second condition in the operators event listener */ 
equals.addEventListener('click', () => {
    operrands[n] = display.textContent;
    display.textContent = "";
    n=0;
    operate(Number(operrands[0]),Number(operrands[1]));
    n=2;
})

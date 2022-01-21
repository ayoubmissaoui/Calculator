let operrands = []
    , n = 0
    , sign;

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
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const display = document.getElementById('operations');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('equalsSign');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent += number.innerText
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (n == 0){
            sign = operator.innerText;
            operrands[n] = display.textContent;
            display.textContent = "";
            n++
        }
        else if ( n == 1) {
            operrands[n] = display.textContent;
            display.textContent = "";
            n=0;
            operate(Number(operrands[0]),Number(operrands[1]));
            sign = operator.innerText;
            n++
        }
        else if ( n == 2) {
            sign = operator.innerText;
            display.textContent = "";
            n=1;
        }
    })
});

equals.addEventListener('click', () => {
    operrands[n] = display.textContent;
    display.textContent = "";
    n=0;
    operate(Number(operrands[0]),Number(operrands[1]));
    n=2;
})

const op1 = document.getElementById('op1');
const type = document.getElementById('type');
const op2 = document.getElementById('op2');
const res = document.getElementById('res');

function appendToDisplay(input) {
    // Si es un símbolo (+ - * /)
    if (['+', '-', '*', '/'].includes(input)) {
        type.innerText = input;
    } 
    // Si es un número o punto
    else {
        if (type.innerText === "") {
            op1.innerText += input;
        } else {
            op2.innerText += input;
        }
    }
}

function clearDisplay() {
    op1.innerText = "";
    type.innerText = "";
    op2.innerText = "";
    res.innerText = "";
}

function calculate() {
    const operacion = op1.innerText + type.innerText + op2.innerText;
    // El "if" reemplaza al try-catch de forma simple
    if (op1.innerText && type.innerText && op2.innerText) {
        res.innerText = "= " + eval(operacion);
    } else {
        res.innerText = "Error";
    }
}

function deleteLast() {
    if (op2.innerText !== "") {
        op2.innerText = op2.innerText.slice(0, -1);
    } else if (type.innerText !== "") {
        type.innerText = "";
    } else {
        op1.innerText = op1.innerText.slice(0, -1);
    }
}

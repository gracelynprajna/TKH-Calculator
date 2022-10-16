function add(num1, num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2
}

function divide (num1, num2){
    return num1 / num2
}

function operate (num1, num2, operator){
    operator = operator.toLowerCase()
    if(operator === 'add'){
        return add(num1,num2)
    }
    else if (operator === 'subtract'){
        return subtract(num1,num2)
    }
    else if (operator === 'multiply'){
        return multiply(num1,num2)
    }
    else if (operator === 'divide'){
        return divide(num1, num2)
    }
    else{
        return 'error operator not recognized'
    }
}

let num1 = 0
let num2 = 0
let operatorButtonVal = ' '


function equalsClicked(){
    num1 = document.querySelector('#num1').value
    num1 = parseInt(num1)
    operatorButtonVal = document.querySelector('#operator').value
    num2 = document.querySelector('#num2').value
    num2 = parseInt(num2)

    let mathOperators = document.getElementById('operator')
    if(mathOperators.options[mathOperators.selectedIndex].value === "add"){
    document.getElementById("result").innerHTML = num1+num2}
    if(mathOperators.options[mathOperators.selectedIndex].value === "subtract"){
    document.getElementById("result").innerHTML = num1 - num2}
    if(mathOperators.options[mathOperators.selectedIndex].value === "divide"){
    document.getElementById("result").innerHTML = num1 / num2}
    if(mathOperators.options[mathOperators.selectedIndex].value === "multiply"){
    document.getElementById("result").innerHTML = num1 * num2}
}
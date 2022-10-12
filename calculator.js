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

function operate (num1, num2, functionName){
    functionBank = ["add", "subtract", "multiply", "divide"];
    if (functionName in functionBank){
        console.log(eval(`${functionName}(${num1, num2})`));
    }
    else{
        return `${functionName} is not an available option`;
    }
}
operate()

console.log(operate(1,2,'add'))
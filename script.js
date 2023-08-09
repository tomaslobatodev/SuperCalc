const input = document.querySelector('#operation')
const keys = document.querySelector('.board')
const result = document.querySelector('#result')
const previousOp = document.querySelector('#previousOperation')
const operationButtons = document.querySelectorAll('.operator')

let num1 = 0
let num2 = 0
let operator = ""

keys.addEventListener('click', (event) => {

	if(!event.target.closest('button')) return;

	const key = event.target;
	const keyValue = key.textContent;
	const { type } = key.dataset;
    let inputHTML = input.textContent
	
    //number
	if(type === 'number') {
        if (inputHTML === '0') {
            inputHTML = keyValue
            input.textContent = inputHTML
        } else {
            input.textContent += keyValue
        }
    } 
    //decimal
    else if (type === 'decimal') {
        if (inputHTML.includes('.')) {} 
        else {
            input.textContent += keyValue
        }
    } 
    //clear
    else if (type === 'clear') {
        input.textContent = '0'
        result.textContent = ''
        num1 = 0
        num2 = 0
        operator = ""
    }
    //backspace
    else if (type === 'backspace') {
        if (inputHTML.length === 1) {
            input.textContent = '0'
        } else {
            input.textContent = inputHTML.slice(0, -1)
        }
    }
    //first number
    else if (type === 'operator') {
        operator = keyValue
        if (result.textContent !== '') {
            num1 = parseInt(result.textContent)
            result.textContent = ''
            previousOp.textContent = `${num1} ${operator}`
            num2 = 0
            operationButtons.forEach((btn) =>
                btn.disabled = true
            )
            result.textContent = ''
        } else {
            num1 = parseInt(inputHTML)
            previousOp.textContent = `${num1}${operator}`
            input.textContent = '0'
            result.textContent = ''
            num2 = 0
            operationButtons.forEach((btn) =>
                btn.disabled = true
            )
        }
    }
    //equal
    else if (type === 'equal' && inputHTML !== '0') {
        if (operator === '') {
            result.textContent = inputHTML
        }
        num2 = parseInt(inputHTML)
        previousOp.textContent = ''
        operationButtons.forEach((btn) =>
            btn.disabled = false
        )
        getResult()
    } 

})

function getResult() {
    if (operator === "+") {
        result.textContent = num1 + num2
    } else if (operator === '-') {
        result.textContent = num1 - num2
    } else if (operator === 'x') {
        result.textContent = num1 * num2
    } else if (operator === '÷') {
        result.textContent = num1 / num2
    }
    input.textContent = 0
    num2 = 0
    operator = ''
}